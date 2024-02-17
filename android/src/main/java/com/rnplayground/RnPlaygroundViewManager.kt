package com.rnplayground

import android.graphics.Color
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp

@ReactModule(name = RnPlaygroundViewManager.NAME)
class RnPlaygroundViewManager :
  RnPlaygroundViewManagerSpec<RnPlaygroundView>() {
  override fun getName(): String {
    return NAME
  }

  public override fun createViewInstance(context: ThemedReactContext): RnPlaygroundView {
    return RnPlaygroundView(context)
  }

  @ReactProp(name = "color")
  override fun setColor(view: RnPlaygroundView?, color: String?) {
    view?.setBackgroundColor(Color.parseColor(color))
  }

  companion object {
    const val NAME = "RnPlaygroundView"
  }
}
