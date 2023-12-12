// file by https://gltf.pmnd.rs/
type GLTFRes = GLTF & {
  nodes: Record<string, THREE.Mesh>;
  materials: Record<string, THREE.MeshStandardMaterial>;
};
