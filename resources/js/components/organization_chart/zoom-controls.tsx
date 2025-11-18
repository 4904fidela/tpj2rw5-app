import { OrganizationChartData } from '@/types/organization';
import { OrgChart } from 'd3-org-chart';
import { Scan, ZoomIn, ZoomOut } from 'lucide-react';
import { RefObject } from 'react';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export default function ZoomControls({
    chartInstance,
}: {
    chartInstance: RefObject<OrgChart<OrganizationChartData> | null>;
}) {
    const controls = [
        {
            name: 'Perbesar Bagan',
            onClick: () => chartInstance.current?.zoomIn(),
            icon: ZoomIn,
        },
        {
            name: 'Perkecil Bagan',
            onClick: () => chartInstance.current?.zoomOut(),
            icon: ZoomOut,
        },
        {
            name: 'Sesuaikan',
            onClick: () => chartInstance.current?.fit(),
            icon: Scan,
        },
    ];

    return controls.map((control) => (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    onClick={control.onClick}
                    variant="outline"
                    className="cursor-pointer text-sidebar-accent-foreground"
                >
                    <control.icon />
                </Button>
            </TooltipTrigger>
            <TooltipContent>{control.name}</TooltipContent>
        </Tooltip>
    ));
}
