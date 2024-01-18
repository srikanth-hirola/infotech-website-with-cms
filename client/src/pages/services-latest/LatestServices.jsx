import React from 'react'
import BannerNew from '../../component/latest-services/BannerNew'
import ServiceFeatureTwo from '../../component/latest-services/ServiceFeatureTwo'
import CounterNewService from '../../component/latest-services/CounterNewService'
import CtaNewOne from '../../component/latest-services/CtaNewOne'
import CtaNewTwo from '../../component/latest-services/CtaNewTwo'
import MoreServicesNew from '../../component/latest-services/MoreServicesNew'
import ProcessNew from '../../component/latest-services/ProcessNew'
import ServiceFeatureFour from '../../component/latest-services/ServiceFeatureFour'
import ServiceFeatureOne from '../../component/latest-services/ServiceFeatureOne'
import ServiceFeatureThree from '../../component/latest-services/ServiceFeatureThree'
import ServiceScroller from '../../component/latest-services/ServiceScroller'
import HeaderOne from '../../common/header/HeaderOne'
import Footer from '../../component/AdminBlogs/Constants/footer'
import FooterOne from '../../common/footer/FooterOne'

const LatestServices = () => {
  return (
    <div>
    <HeaderOne/>
        <BannerNew/>
        <ServiceFeatureOne/>
        <ServiceFeatureTwo/>
        <ServiceFeatureThree/>
        <MoreServicesNew/>
        <ServiceFeatureFour/>
        <ProcessNew/>
        <ServiceScroller/>
        <CounterNewService/>
        <CtaNewTwo/>
        <CtaNewOne/>
        <FooterOne/>
    </div>
  )
}

export default LatestServices