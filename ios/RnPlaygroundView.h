// This guard prevent this file to be compiled in the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
#import <React/RCTViewComponentView.h>
#import <UIKit/UIKit.h>

#ifndef RnPlaygroundViewNativeComponent_h
#define RnPlaygroundViewNativeComponent_h

NS_ASSUME_NONNULL_BEGIN

@interface RnPlaygroundView : RCTViewComponentView
@end

NS_ASSUME_NONNULL_END

#endif /* RnPlaygroundViewNativeComponent_h */
#endif /* RCT_NEW_ARCH_ENABLED */
