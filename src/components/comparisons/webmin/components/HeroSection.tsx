import React from 'react';
import { ArrowRight, Github, Star } from '../../ui/icons';

const HeroSection: React.FC = () => {
  return (
    <section className="webmin-hero relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-16">
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-5">
              <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
                <span className="text-blue-600">1Panel</span> vs <span className="text-gray-700">Webmin</span>
              </h1>
              <p className="max-w-2xl text-xl leading-relaxed text-gray-600 md:text-2xl">
                现代化云原生管理面板与传统服务器管理工具的专业对比分析
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#comparison"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-700 hover:shadow-xl"
              >
                查看详细对比
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://github.com/1Panel-dev/1Panel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 bg-white px-8 py-4 font-semibold text-gray-700 transition-all duration-200 hover:border-blue-600 hover:text-blue-600"
              >
                <Github className="mr-2 h-5 w-5" />
                <Star className="mr-1 h-4 w-4" />
                29k+
              </a>
            </div>

            <div className="grid grid-cols-1 gap-3 border-t border-gray-200 pt-8 sm:grid-cols-2">
              <div className="rounded-xl border border-blue-100 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center">
                  <div className="mr-3 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-blue-600 text-lg font-bold text-white">
                    1P
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">1Panel</h3>
                    <p className="text-sm font-medium text-blue-600">现代化云原生面板</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
                    基于 Go + Vue.js 技术栈
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
                    深度集成 Docker 容器化
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
                    现代化用户界面设计
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
                    一键应用部署
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center">
                  <div className="mr-3 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-gray-600 text-lg font-bold text-white">
                    W
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Webmin</h3>
                    <p className="text-sm font-medium text-gray-600">传统企业级管理工具</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-gray-500"></span>
                    基于 Perl 语言开发
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-gray-500"></span>
                    20+ 年发展历史
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-gray-500"></span>
                    116 个标准功能模块
                  </li>
                  <li className="flex items-center">
                    <span className="mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-gray-500"></span>
                    广泛的系统兼容性
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-2xl border border-gray-200 bg-white p-3 shadow-2xl">
              <img
                src="/images/comparisons/webmin/hero-dashboard.png"
                alt="Server Management Dashboard"
                width={1954}
                height={1203}
                loading="eager"
                decoding="async"
                className="h-auto w-full rounded-xl"
              />
            </div>
            <div className="absolute inset-0 -rotate-6 scale-105 rounded-2xl bg-gradient-to-tr from-blue-100 to-transparent opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
