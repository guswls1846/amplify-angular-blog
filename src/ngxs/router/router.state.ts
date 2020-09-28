import { RouterState, RouterStateModel as RouterStateOuterModel } from "@ngxs/router-plugin";
import { Selector } from "@ngxs/store";

import { RouterStateParams } from "./router-state-custom";
import { ImmutableSelector } from "@ngxs-labs/immer-adapter";
import { Injectable } from "@angular/core";
@Injectable()
export class RouterSelectors {
  // base selector
  @Selector([RouterState])
  @ImmutableSelector()
  static data({ state }: RouterStateOuterModel<RouterStateParams>) {
    return state.data;
  }

  @Selector([RouterState])
  @ImmutableSelector()
  static params({ state }: RouterStateOuterModel<RouterStateParams>) {
    return state.params;
  }

  @Selector([RouterState])
  @ImmutableSelector()
  static queryParams({ state }: RouterStateOuterModel<RouterStateParams>) {
    return state.queryParams;
  }

  @Selector([RouterState])
  @ImmutableSelector()
  static url({ state }: RouterStateOuterModel<RouterStateParams>) {
    return state.url;
  }
}
