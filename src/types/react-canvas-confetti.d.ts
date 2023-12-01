interface Options {
  /**
   * The angle in which to launch the confetti, in degrees. 90 is straight up.
   * @default 90
   */
  angle?: number | undefined;
  /**
   * An array of color strings, in the HEX format... you know, like #bada55.
   */
  colors?: string[] | undefined;
  /**
   * How quickly the confetti will lose speed. Keep this number between 0 and 1, otherwise the confetti will gain speed. Better yet,
   * just never change it.
   * @default 0.9
   */
  decay?: number | undefined;
  /**
   * Disables confetti entirely for users that prefer reduced motion. The confetti() promise will resolve immediately in this case.
   * @default false
   */
  disableForReducedMotion?: boolean | undefined;
  /**
   * How much to the side the confetti will drift. The default is 0, meaning that they will fall straight down.
   * Use a negative number for left and positive number for right
   * @default 0
   */
  drift?: number | undefined;
  /**
   * How quickly the particles are pulled down. 1 is full gravity, 0.5 is half gravity, etc., but there are no limits.
   * @default 1
   */
  gravity?: number | undefined;
  /**
   * Where to start firing confetti from. Feel free to launch off-screen if you'd like.
   */
  origin?: Origin | undefined;
  /**
   * The number of confetti to launch. More is always fun... but be cool, there's a lot of math involved.
   * @default 50
   */
  particleCount?: number | undefined;
  /**
   * Scale factor for each confetti particle. Use decimals to make the confetti smaller.
   * @default 1
   */
  scalar?: number | undefined;
  /**
   * The possible values are square, circle, and star. The default is to use both squares and circles in an even mix.
   * @default ['square','circle']
   */
  shapes?: Shape[] | undefined;
  /**
   * How far off center the confetti can go, in degrees. 45 means the confetti will launch at the defined angle plus or minus 22.5
   * degrees.
   * @default 45
   */
  spread?: number | undefined;
  /**
   * How fast the confetti will start going, in pixels.
   * @default 45
   */
  startVelocity?: number | undefined;
  /**
   * How many times the confetti will move. This is abstract... but play with it if the confetti disappear too quickly for you.
   * @default 200
   */
  ticks?: number | undefined;
  /**
   * The confetti should be on top, after all. But if you have a crazy high page, you can set it even higher.
   * @default 100
   */
  zIndex?: number | undefined;
}

type CreateTypes = {
  (options?: Options): Promise<null> | null;
  reset: Reset;
};
