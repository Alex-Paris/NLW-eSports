import { GameParams } from "../screens/Game";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      game: GameParams;
    }
  }
}