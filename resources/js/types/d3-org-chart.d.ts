declare module 'd3-org-chart' {
    type Node<Data extends BaseOrgChartData> = {
        data: Data;
    };
    export class OrgChart<Data> {
        container(el: HTMLElement | string): this;
        data(data: Data[]): this;
        svgWidth(width: number): this;
        svgHeight(height: number): this;
        nodeWidth(fn: (d: Node<Data>) => number): this;
        nodeHeight(fn: (d: Node<Data>) => number): this;
        childrenMargin(fn: (d: Node<Data>) => number): this;
        siblingsMargin(fn: (d: Node<Data>) => number): this;
        compact(value: boolean): this;
        nodeContent(fn: (d: Node<Data>) => string): this;
        onNodeClick?(fn: (d: Node<Data>) => void): this;
        setExpanded?(fn: (d: Node<Data>) => boolean): this;
        initialZoom(value: number): this;
        initialExpandLevel(value: number): this;
        fit(): this;
        zoomIn(): this;
        zoomOut(): this;
        render(): this;
    }
}
