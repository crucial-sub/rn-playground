package com.rnplayground

import android.view.View

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.viewmanagers.RnPlaygroundViewManagerDelegate
import com.facebook.react.viewmanagers.RnPlaygroundViewManagerInterface

abstract class RnPlaygroundViewManagerSpec<T : View> : SimpleViewManager<T>(), RnPlaygroundViewManagerInterface<T> {
  private val mDelegate: ViewManagerDelegate<T>

  init {
    mDelegate = RnPlaygroundViewManagerDelegate(this)
  }

  override fun getDelegate(): ViewManagerDelegate<T>? {
    return mDelegate
  }
}
