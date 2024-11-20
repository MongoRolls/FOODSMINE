const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Cumulative Layout Shift (CLS) - 衡量视觉稳定性
      getCLS(onPerfEntry);
      // First Input Delay (FID) - 衡量交互性
      getFID(onPerfEntry);
      // First Contentful Paint (FCP) - 衡量加载性能
      getFCP(onPerfEntry);
      // Largest Contentful Paint (LCP) - 衡量加载性能
      getLCP(onPerfEntry);
      // Time to First Byte (TTFB) - 衡量服务器响应时间
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
