export type BaseOrganizationChartData = {
    id: string;
    parentId?: string;
};

type OrganizationChartData = BaseOrganizationChartData & {
    name: string;
    position: string;
};

type Position = {
    level: 'rw' | 'rt';
    name: string;
    jobDescription: string;
};
