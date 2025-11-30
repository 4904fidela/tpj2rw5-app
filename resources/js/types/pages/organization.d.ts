export type BaseOrganizationChartData = {
    id: string;
    parentId?: string;
};

type OrganizationChartData = BaseOrganizationChartData & {
    name: string;
    position: string;
};

type Position = {
    id: number;
    level: 'rw' | 'rt';
    name: string;
    jobDescription: string;
    isAssistant: boolean;
    parentId?: number;
};

type Committee = {
    id: number;
    resident_name: string;
    position: Omit<Position, 'level' | 'jobDescription'>;
};

type OrganizationData = {
    data: {
        committees: Committee[];
        positions: Position[];
    };
};
