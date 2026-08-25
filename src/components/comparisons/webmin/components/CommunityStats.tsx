import React from 'react';
import { Star, GitFork, Users, Download, Calendar, TrendingUp } from '../../ui/icons';

const CommunityStats: React.FC = () => {
  return (
    <section id="community" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">社区数据对比</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            通过GitHub统计数据和社区活跃度，展示两款产品的生态发展情况
          </p>
        </div>

        {/* Main Statistics Comparison */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* 1Panel Stats */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mr-4">
                <img src="/images/comparisons/webmin/1panel-logo.png" alt="1Panel Logo" width={500} height={500} loading="lazy" decoding="async" className="w-10 h-10 rounded-xl" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">1Panel</h3>
                <p className="text-blue-600 font-semibold">快速增长的现代化社区</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <Star className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">29k+</div>
                <div className="text-gray-600 font-medium">GitHub Stars</div>
                <div className="text-green-600 text-sm mt-1">↗ 快速增长</div>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <GitFork className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">2.5k+</div>
                <div className="text-gray-600 font-medium">Forks</div>
                <div className="text-green-600 text-sm mt-1">↗ 活跃贡献</div>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <Users className="h-8 w-8 text-purple-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">100+</div>
                <div className="text-gray-600 font-medium">贡献者</div>
                <div className="text-blue-600 text-sm mt-1">持续增长</div>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <Calendar className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <div className="text-lg font-bold text-gray-900 mb-1">2025-06-17</div>
                <div className="text-gray-600 font-medium">最近更新</div>
                <div className="text-green-600 text-sm mt-1">活跃开发</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">社区特点</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">GitHub关注度快速增长</span>
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-blue-500 mr-3" />
                  <span className="text-gray-700">活跃的中文社区论坛</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-3" />
                  <span className="text-gray-700">丰富的中文文档和教程</span>
                </li>
                <li className="flex items-center">
                  <Calendar className="h-5 w-5 text-purple-500 mr-3" />
                  <span className="text-gray-700">定期版本更新和功能迭代</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Webmin Stats */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gray-600 rounded-2xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Webmin</h3>
                <p className="text-gray-600 font-semibold">成熟稳定的全球社区</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <Star className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">5k+</div>
                <div className="text-gray-600 font-medium">GitHub Stars</div>
                <div className="text-gray-500 text-sm mt-1">稳定增长</div>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <GitFork className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">695+</div>
                <div className="text-gray-600 font-medium">Forks</div>
                <div className="text-gray-500 text-sm mt-1">稳定维护</div>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <Users className="h-8 w-8 text-purple-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">120+</div>
                <div className="text-gray-600 font-medium">贡献者</div>
                <div className="text-gray-500 text-sm mt-1">经验丰富</div>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <Download className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <div className="text-lg font-bold text-gray-900 mb-1">100万+</div>
                <div className="text-gray-600 font-medium">年安装量</div>
                <div className="text-green-600 text-sm mt-1">广泛使用</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">社区特点</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-gray-500 mr-3" />
                  <span className="text-gray-700">20+年的全球用户社区</span>
                </li>
                <li className="flex items-center">
                  <Download className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">庞大的用户安装基数</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-3" />
                  <span className="text-gray-700">详尽的英文文档资源</span>
                </li>
                <li className="flex items-center">
                  <Calendar className="h-5 w-5 text-purple-500 mr-3" />
                  <span className="text-gray-700">长期稳定的版本维护</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trend Analysis */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">发展趋势分析</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 text-blue-100">1Panel 发展趋势</h4>
              <ul className="space-y-2 text-blue-50">
                <li>• GitHub关注度快速增长，社区活跃度持续提升</li>
                <li>• 功能模块不断丰富，企业级特性持续增强</li>
                <li>• 云原生技术深度集成，适应现代化运维需求</li>
                <li>• 国际化推广加速，全球用户基数快速扩大</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-purple-100">Webmin 发展趋势</h4>
              <ul className="space-y-2 text-purple-50">
                <li>• 界面现代化改进，提升用户体验</li>
                <li>• 容器技术支持增强，适应技术发展</li>
                <li>• 云服务集成能力提升，扩展应用场景</li>
                <li>• 安全性持续强化，维护企业级稳定性</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Support Ecosystem */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">1Panel 支持生态</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-700">官方中文文档完善，学习资源丰富</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-700">社区论坛活跃，问题响应速度快</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-700">视频教程资源丰富，上手门槛低</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-700">商业版提供专业技术支持服务</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Webmin 支持生态</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-500 rounded-full mr-3"></div>
                <span className="text-gray-700">英文文档详尽，历史积累深厚</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-500 rounded-full mr-3"></div>
                <span className="text-gray-700">全球用户社区规模大，经验丰富</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-500 rounded-full mr-3"></div>
                <span className="text-gray-700">第三方教程和资源广泛可得</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-500 rounded-full mr-3"></div>
                <span className="text-gray-700">通过Virtualmin提供商业支持</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
