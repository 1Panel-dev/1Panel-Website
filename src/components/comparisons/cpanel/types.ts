// 类型定义文件
export interface ComparisonData {
  对比分析: {
    基本信息对比: {
      "1Panel": PanelInfo;
      "cPanel": PanelInfo;
    };
    核心功能对比: {
      "1Panel": Record<string, string>;
      "cPanel": Record<string, string>;
    };
    技术架构对比: {
      "1Panel": Record<string, string>;
      "cPanel": Record<string, string>;
    };
    用户体验对比: {
      "1Panel": Record<string, string>;
      "cPanel": Record<string, string>;
    };
    性能与安全对比: {
      "1Panel": Record<string, string>;
      "cPanel": Record<string, string>;
    };
    价格与许可对比: {
      "1Panel": Record<string, string>;
      "cPanel": Record<string, string>;
    };
  };
  功能评分: FunctionScore[];
  使用场景: Record<string, ScenarioRecommendation>;
  生成时间: string;
}

export interface PanelInfo {
  开发语言: string;
  许可证: string;
  发布时间: string;
  开发团队: string;
  [key: string]: string;
}

export interface FunctionScore {
  功能维度: string;
  "1Panel评分": number;
  "cPanel评分": number;
}

export interface ScenarioRecommendation {
  "1Panel推荐度": string;
  "cPanel推荐度": string;
  原因: string;
}

export interface FeatureComparison {
  功能类别: string;
  "1Panel": string;
  "cPanel": string;
  备注?: string;
}

export interface CostData {
  年份: string;
  "1Panel": number;
  "cPanel Admin": number;
  节省金额: number;
}
