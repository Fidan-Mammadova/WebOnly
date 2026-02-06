// RU: Общие типы данных для админки и лендинга.
// EN: Shared data types for admin and landing apps.
export interface RequestItem {
    id: string;
    name: string;
    company: string;
    email: string;
    phone?: string;
    status: "new" | "in_progress" | "paid" | "canceled";
    comment?: string;
}

export interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

export interface KPI {
    label: string;
    value: number;
    delta?: number;
}

export interface ChartPoint {
    label: string;
    value: number;
}
