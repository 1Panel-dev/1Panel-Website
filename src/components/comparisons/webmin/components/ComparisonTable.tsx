import React from 'react';
import { Star } from '../../ui/icons';

const ComparisonTable: React.FC = () => {
  const comparisonData = [
    {
      category: "用户体验",
      items: [
        { feature: "界面设计", onepanel: "现代化扁平设计", webmin: "传统Web界面", onepanelBetter: true },
        { feature: "响应式设计", onepanel: "完整移动端支持", webmin: "基础响应式", onepanelBetter: true },
        { feature: "学习曲线", onepanel: "简单易用", webmin: "需要技术基础", onepanelBetter: true },
        { feature: "中文支持", onepanel: "完善本土化", webmin: "基础多语言", onepanelBetter: true }
      ]
    },
    {
      category: "核心功能",
      items: [
        { feature: "系统管理", onepanel: "基础覆盖", webmin: "完整覆盖(18模块)", onepanelBetter: false },
        { feature: "网络服务", onepanel: "重点应用", webmin: "全面支持(18模块)", onepanelBetter: false },
        { feature: "容器管理", onepanel: "深度集成Docker", webmin: "基础支持", onepanelBetter: true },
        { feature: "应用商店", onepanel: "精选应用一键安装", webmin: "需手动配置", onepanelBetter: true }
      ]
    },
    {
      category: "技术特性",
      items: [
        { feature: "开发语言", onepanel: "Go + Vue.js", webmin: "Perl", onepanelBetter: true },
        { feature: "性能表现", onepanel: "快速响应", webmin: "中等响应", onepanelBetter: true },
        { feature: "资源占用", onepanel: "200-500MB", webmin: "50-150MB", onepanelBetter: false },
        { feature: "扩展能力", onepanel: "基于容器", webmin: "模块化系统", onepanelBetter: false }
      ]
    },
    {
      category: "安全性",
      items: [
        { feature: "隔离性", onepanel: "容器隔离", webmin: "进程隔离", onepanelBetter: true },
        { feature: "安全更新", onepanel: "自动化更新", webmin: "手动更新", onepanelBetter: true },
        { feature: "权限管理", onepanel: "应用级控制", webmin: "精细化控制", onepanelBetter: false },
        { feature: "历史记录", onepanel: "较短", webmin: "20+年验证", onepanelBetter: false }
      ]
    },
    {
      category: "社区与支持",
      items: [
        { feature: "GitHub Stars", onepanel: "29k+", webmin: "5k+", onepanelBetter: true },
        { feature: "社区活跃度", onepanel: "快速增长", webmin: "稳定维护", onepanelBetter: true },
        { feature: "文档质量", onepanel: "中文完善", webmin: "英文详尽", onepanelBetter: false },
        { feature: "技术支持", onepanel: "商业版支持", webmin: "Virtualmin支持", onepanelBetter: false }
      ]
    }
  ];

  return (
    <section id="comparison" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">详细功能对比</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            全方位对比两款产品在各个维度的表现差异
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
            <div className="lg:col-span-1 bg-gray-50 p-6 border-r border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">对比维度</h3>
            </div>
            <div className="lg:col-span-1 bg-blue-50 p-6 border-r border-gray-200">
              <div className="flex items-center justify-center">
                <div className="mr-3">
                  <img src="/images/comparisons/webmin/1panel-logo.png" alt="1Panel Logo" width={500} height={500} loading="lazy" decoding="async" className="w-10 h-10 rounded-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">1Panel</h3>
              </div>
            </div>
            <div className="lg:col-span-1 bg-gray-100 p-6 border-r border-gray-200">
              <div className="flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center text-white font-bold mr-3">
                  W
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Webmin</h3>
              </div>
            </div>
            <div className="lg:col-span-1 p-6">
              <h3 className="text-lg font-semibold text-gray-900 text-center">优势</h3>
            </div>
          </div>

          {comparisonData.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="bg-gray-100 px-6 py-4 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 lg:col-span-4">
                  {category.category}
                </h4>
              </div>

              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="grid grid-cols-1 lg:grid-cols-4 gap-0 border-t border-gray-100">
                  <div className="p-4 lg:border-r border-gray-200">
                    <p className="font-medium text-gray-900">{item.feature}</p>
                  </div>
                  <div className="p-4 lg:border-r border-gray-200 bg-blue-25">
                    <p className="text-gray-700">{item.onepanel}</p>
                  </div>
                  <div className="p-4 lg:border-r border-gray-200">
                    <p className="text-gray-700">{item.webmin}</p>
                  </div>
                  <div className="p-4 flex justify-center items-center">
                    {item.onepanelBetter ? (
                      <div className="flex items-center text-blue-600">
                        <Star className="h-5 w-5 fill-current mr-1" />
                        <span className="text-sm font-medium">1Panel</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-gray-600">
                        <Star className="h-5 w-5 fill-current mr-1" />
                        <span className="text-sm font-medium">Webmin</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">对比结论</h3>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            <strong>1Panel</strong> 在用户体验、现代化技术和容器化支持方面表现卓越，更适合追求现代化运维的团队；
            <strong>Webmin</strong> 在功能完整性、系统兼容性和稳定性方面更胜一筹，适合传统企业环境。
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
