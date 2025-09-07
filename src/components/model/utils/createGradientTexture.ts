import * as THREE from 'three';

type GradientColor = Extract<ExpandColor, `gradient-${string}`>;
const palettes: Record<GradientColor, [string, string]> = {
  'gradient-yellow': ['#f7e167', '#f5f5f5'],
  'gradient-pinkblue': ['#fecedb', '#5ffafd'],
};

function createGradientTexture(color: ExpandColor) {
  // 기본 PBR 머티리얼 생성
  // - MeshStandardMaterial은 물리 기반 조명(PBR)을 지원
  // - side: 양면 렌더링 여부 → DoubleSide로 하면 메쉬의 앞/뒷면 모두 렌더링
  const cakeMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.5,
    metalness: 0.0,
    side: THREE.DoubleSide,
  });

  const [topHex, bottomHex] = palettes[color as GradientColor];
  // 우리가 셰이더에 전달할 uniforms 정의
  // - colorTop, colorBottom: 그라데이션용 상단/하단 색상
  const uniforms = {
    colorTop: { value: new THREE.Color(topHex) },
    colorBottom: { value: new THREE.Color(bottomHex) },
    minY: { value: 0.5 }, // 대상 mesh의 바닥
    height: { value: 1 },
  };

  cakeMat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    // ── Vertex Shader 수정 ──
    shader.vertexShader = shader.vertexShader
      .replace(
        'void main() {',
        `
        varying float vWorldY; // vertex Y값 (그라데이션 보간에 사용)
        void main() {
      `,
      )
      .replace(
        '#include <worldpos_vertex>',
        `
        #include <worldpos_vertex>
        vWorldY = worldPosition.y;
      `,
      );

    // ── Fragment Shader 수정 ──
    const header = `
      uniform vec3  colorTop;
      uniform vec3  colorBottom;
      uniform float minY;
      uniform float height;
      varying float vWorldY;

      void applyGradient(inout vec3 baseColor) {
        vec3 gradColor;
        // (vWorldY - minY): 바닥에서 얼마나 올라왔는지
        // (vWorldY - minY) / max(height, 1e-6): 전체 높이에 대한 비율
        float t = clamp((vWorldY - minY) / max(height, 1e-6), 0.0, 1.0);
        gradColor = mix(colorBottom, colorTop, t); // 하단 → 상단 그라데이션
        baseColor *= gradColor; // diffuseColor에 곱해 최종 반영
      }
    `;

    // Fragment Shader에 header 추가 (uniform/함수 정의 삽입)
    shader.fragmentShader = shader.fragmentShader.replace(
      'void main() {',
      header + '\nvoid main() {',
    );

    shader.fragmentShader = shader.fragmentShader.replace(
      /vec4\s+diffuseColor\s*=\s*vec4\(\s*diffuse\s*,\s*opacity\s*\)\s*;/,
      `
      vec4 diffuseColor = vec4( diffuse, opacity );
      applyGradient(diffuseColor.rgb);
      `,
    );

    // 디버깅이나 런타임 수정할 수 있도록 shader를 userData에 보관
    cakeMat.userData.shader = shader;
  };

  // 동일한 정의일 때 셰이더 캐시 재사용하도록 키 고정
  cakeMat.customProgramCacheKey = () => 'cake-gradient-pbr-v3';

  return cakeMat;
}

export default createGradientTexture;
