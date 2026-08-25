import React from 'react';
import { Cloud, Container, Server, Settings } from '../../ui/icons';

const ProductOverview: React.FC = () => {
  return (
    <section id="overview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">产品概述对比</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            深入了解两款Linux服务器管理面板的核心特点与技术优势
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* 1Panel Overview */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mr-4">
                <Container className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">1Panel</h3>
                <p className="text-blue-600 font-semibold text-lg">现代化开源Linux服务器运维管理面板</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">核心特点</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900">现代化技术栈</p>
                    <p className="text-gray-600 text-sm">基于Go + Vue.js开发，采用现代化Web设计</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900">容器化技术</p>
                    <p className="text-gray-600 text-sm">深度整合Docker，实现应用隔离部署</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900">云原生运维</p>
                    <p className="text-gray-600 text-sm">专注云原生场景，支持大型语言模型管理</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900">用户体验</p>
                    <p className="text-gray-600 text-sm">直观的Web界面，降低Linux服务器管理门槛</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">29k+</div>
                <div className="text-sm text-gray-600">GitHub Stars</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">2.5k+</div>
                <div className="text-sm text-gray-600">Forks</div>
              </div>
            </div>
          </div>

          {/* Webmin Overview */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gray-600 rounded-2xl flex items-center justify-center mr-4">
                <Server className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Webmin</h3>
                <p className="text-gray-600 font-semibold text-lg">功能强大且灵活的Web服务器管理控制面板</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">核心特点</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900">成熟稳定</p>
                    <p className="text-gray-600 text-sm">基于Perl开发，拥有20多年发展历史</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900">模块化设计</p>
                    <p className="text-gray-600 text-sm">116个标准模块和众多第三方扩展</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900">广泛兼容</p>
                    <p className="text-gray-600 text-sm">支持广泛的Unix-like系统，全球年安装量约100万次</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-gray-900">专业扩展</p>
                    <p className="text-gray-600 text-sm">提供Virtualmin和Usermin等专业解决方案</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gray-600">5k+</div>
                <div className="text-sm text-gray-600">GitHub Stars</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gray-600">100万+</div>
                <div className="text-sm text-gray-600">年安装量</div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Architecture Comparison */}
        <div className="bg-gray-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">技术架构对比</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">后端技术</h4>
              <p className="text-blue-600 font-medium">1Panel: Go语言</p>
              <p className="text-gray-600">Webmin: Perl</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">前端技术</h4>
              <p className="text-blue-600 font-medium">1Panel: Vue.js</p>
              <p className="text-gray-600">Webmin: 传统HTML+JS</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Container className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">部署模式</h4>
              <p className="text-blue-600 font-medium">1Panel: Docker容器化</p>
              <p className="text-gray-600">Webmin: 传统二进制</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Server className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">架构设计</h4>
              <p className="text-blue-600 font-medium">1Panel: 微服务+容器编排</p>
              <p className="text-gray-600">Webmin: 模块化+插件</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
