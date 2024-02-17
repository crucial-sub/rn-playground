#ifdef RCT_NEW_ARCH_ENABLED
#import "RnPlaygroundView.h"

#import <react/renderer/components/RNRnPlaygroundViewSpec/ComponentDescriptors.h>
#import <react/renderer/components/RNRnPlaygroundViewSpec/EventEmitters.h>
#import <react/renderer/components/RNRnPlaygroundViewSpec/Props.h>
#import <react/renderer/components/RNRnPlaygroundViewSpec/RCTComponentViewHelpers.h>

#import "RCTFabricComponentsPlugins.h"
#import "Utils.h"

using namespace facebook::react;

@interface RnPlaygroundView () <RCTRnPlaygroundViewViewProtocol>

@end

@implementation RnPlaygroundView {
    UIView * _view;
}

+ (ComponentDescriptorProvider)componentDescriptorProvider
{
    return concreteComponentDescriptorProvider<RnPlaygroundViewComponentDescriptor>();
}

- (instancetype)initWithFrame:(CGRect)frame
{
  if (self = [super initWithFrame:frame]) {
    static const auto defaultProps = std::make_shared<const RnPlaygroundViewProps>();
    _props = defaultProps;

    _view = [[UIView alloc] init];

    self.contentView = _view;
  }

  return self;
}

- (void)updateProps:(Props::Shared const &)props oldProps:(Props::Shared const &)oldProps
{
    const auto &oldViewProps = *std::static_pointer_cast<RnPlaygroundViewProps const>(_props);
    const auto &newViewProps = *std::static_pointer_cast<RnPlaygroundViewProps const>(props);

    if (oldViewProps.color != newViewProps.color) {
        NSString * colorToConvert = [[NSString alloc] initWithUTF8String: newViewProps.color.c_str()];
        [_view setBackgroundColor: [Utils hexStringToColor:colorToConvert]];
    }

    [super updateProps:props oldProps:oldProps];
}

Class<RCTComponentViewProtocol> RnPlaygroundViewCls(void)
{
    return RnPlaygroundView.class;
}

@end
#endif
