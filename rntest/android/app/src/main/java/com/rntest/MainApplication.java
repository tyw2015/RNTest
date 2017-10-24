package com.rntest;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.systango.rncrashreportermodule.RNCrashReporterModule;
import io.jchat.android.JMessageReactPackage;
import org.lovebing.reactnative.baidumap.BaiduMapPackage;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.rnfs.RNFSPackage;
import com.keyee.pdfview.PDFView;
import cn.jpush.reactnativejpush.JPushPackage;
import com.microsoft.codepush.react.CodePush;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private static final boolean SHUTDOWN_TOAST = false;

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

    @Override
    protected String getJSBundleFile() {
      return CodePush.getJSBundleFile();
    }

    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new RNCrashReporterModule(MainActivity.getActivity()),
          new JMessageReactPackage(SHUTDOWN_TOAST),
          new BaiduMapPackage(getApplicationContext()),
          new RCTCameraPackage(),
          new RNFSPackage(),
          new PDFView(),
          new JPushPackage(true,true),
          new CodePush(getResources().getString(R.string.reactNativeCodePush_androidDeploymentKey), getApplicationContext(), BuildConfig.DEBUG)
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
