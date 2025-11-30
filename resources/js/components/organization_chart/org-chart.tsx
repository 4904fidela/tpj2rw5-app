import { OrganizationChartData } from '@/types/pages/organization';
import { OrgChart } from 'd3-org-chart';
import { useEffect, useRef } from 'react';
import ZoomControls from './zoom-controls';

export default function OrganizationChart({
    data,
}: {
    data: OrganizationChartData[];
}) {
    const chartRef = useRef<HTMLDivElement>(null);
    const chartInstance = useRef<OrgChart<OrganizationChartData> | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            chartInstance.current ??= new OrgChart<OrganizationChartData>();

            chartInstance.current
                .container(chartRef.current)
                .data(data)
                .compact(false)
                .svgHeight(chartRef.current.offsetHeight)
                .nodeHeight(() => 100)
                .nodeWidth(() => 200)
                .childrenMargin(() => 40)
                .initialZoom(0.8)
                .initialExpandLevel(2)
                .nodeContent(
                    (d) =>
                        // d.data.id.endsWith('a')
                        //     ? ''
                        `<div class="flex h-full flex-col border-2 border-muted-foreground bg-muted-foreground rounded-xl font-sans overflow-hidden">
                            <div class="flex justify-center text-secondary px-4 py-2 font-medium text-sm">${d.data.position}</div>
                            <div class="flex w-full h-full justify-center items-center text-center px-4 py-2 bg-background">
                                <span class="truncate text-wrap">${d.data.name}</span>
                            </div>
                        </div>`,
                )
                .render();
        }
    }, [data]);

    return (
        <div ref={chartRef} className="relative h-full w-full">
            <div className="absolute right-4 bottom-4 flex gap-2">
                <ZoomControls chartInstance={chartInstance} />
            </div>
        </div>
    );
}
