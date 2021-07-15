import { ToolbarButtonProps } from '@udecode/slate-plugins-toolbar';

export interface ToolbarMultiHighlightConfigProps {
    icon: any,
    color: string
}

export interface ToolbarMultiHighlightProps extends ToolbarButtonProps {
    clear: 'string | string[] | undefined'
    config: ToolbarMultiHighlightConfigProps[]
    removeIcon: any
}