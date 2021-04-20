import * as fs from 'fs';
import * as path from 'path';
import { getColors } from './colors';
import {
    GenerateTheme,
    ThemeSetting,
    ThemeVariables,
    Primer,
    Options,
} from './interfaces';

export function variables(theme: Primer): ThemeVariables {
    const color = getColors(theme);
    const themes = (options: Options) => options[theme];
    const scale = color.scale;
    return {
        colorAccent: color.underlinenav.borderActive,
        colorDark: '#455A64',
        fontSizeSm: 11,
        fontSizeMd: 12,
        fontSizeLg: 14,
        fontSizeHuge: 24,
        fontFace: 'system',
        buttonBackground: ['background', 0.5],
        buttonBackgroundHover: 'color(var(colorAccent) a(0.2))',
        buttonMinSize: [80, 28],
        buttonIconFileColor: 'color(var(colorAccent) a(0.70))',
        buttonIconFileSelectedColor: 'var(colorAccent)',
        buttonIconFileBackground: ['background', 1],
        buttonIconFileSelectedBackground: 'var(buttonIconFileBackground)',
        buttonIconFileContentMargin: [12, 12],
        autoCompleteFontSize: 'var(fontSizeSm)',
        autoCompleteRowPadding: [10, 6],
        autoCompleteFontItalic: true,
        autoCompleteColor: ['foreground', 0.5],
        autoCompleteMatchColor: 'var(colorAccent)',
        autoCompleteSelectedColor: ['foreground', 1],
        autoCompleteSelectedMatchColor: 'var(colorAccent)',
        autoCompleteBlend: true,
        autoCompleteSelectedBackground: ['foreground', 0.1],
        panelControlBackground: color.bg.canvasInset,
        panelPathRowFontSize: 'var(fontSizeSm)',
        panelPathRowFontItalic: true,
        panelPathRowColor: ['foreground', 1],
        panelRowPadding: [10, 10],
        panelRowFontSize: 'var(fontSizeMd)',
        panelRowBackground: ['background', 1],
        panelRowColor: 'color(var(colorDark) l(+ 20%))',
        panelRowSelectedBackground: ['foreground', 0.1],
        panelRowSelectedColor: ['foreground', 1],
        panelRowMatchColor: 'var(colorAccent)',
        panelRowSelectedMatchColor: 'var(colorAccent)',
        inputBackground: ['background', 1],
        inputBorderColor: ['foreground', 0.1],
        inputBorderSize: [0, 0, 0, 1],
        inputBorderMargin: [12, 8, 12, 8],

        sidebarBackground: color.bg.canvasInset,
        sidebarHeadingFg: color.text.primary,
        sidebarLabelColor: color.text.secondary,
        sidebarLabelColorHover: ['foreground', 1],
        sidebarLabelSelectedBackground: ['foreground', 0.06],
        sidebarLabelSelectedColor: 'var(colorAccent)',
        sidebarLabelExpandableColor: 'var(colorAccent)',
        sidebarLabelSelectedBorderSize: [2, 0, 0, 0],
        sidebarLabelSelectedBorderColor: 'var(colorAccent)',
        sidebarIconFileSize: 7,
        statusbarBackground: ['background', 1],
        statusbarLabelColor: 'color(var(colorDark) l(+ 20%))',
        statusbarIconColor: 'var(statusbarLabelColor)',

        treeHoverBg: '#282e34',
        treeSelectedBg: '#39414a',

        tabInactiveBackground: color.bg.canvasInset,
        tabBorder: color.border.primary,
        tabActiveBackground: color.bg.canvas,
        tabSelectedBorderBorderColor: color.underlinenav.borderActive,

        titleBarBackground: color.bg.canvas,
        titleBarColor: 'color(var(colorDark) l(+ 20%))',
        tooltipBackground: ['foreground', 1],
        tooltipLabelColor: ['background', 1],
        gridLayoutBorderColor:
            'color(var(colorAccent) blenda(var(colorDark) 30%))',
        gridLayoutBorderSize: 2,
        minimapColor: 'color(var(colorAccent) a(0.2))',
        minimapOpacity: '0.5',
        scrollBar: ['foreground', 0.2],
        scrollTrack: ['foreground', 0.4],
        vcsBadgeSize: 5,
        vcsIgnored: themes({
            light: scale.gray[4],
            dark: color.text.disabled,
            dimmed: color.text.disabled,
        }),
        progressBarBackground: themes({
            light: scale.blue[4],
            dark: scale.blue[5],
            dimmed: scale.blue[5],
        }),
        vcsModified: 'var(--redish)',
        vcsUnmerged: 'var(--bluish)',
        vcsDeleted: 'var(--bluish)',
        vcsStaged: 'var(--yellowish)',
        vcsUntracked: 'var(--greenish)',
        vcsMissing: 'var(--orangish)',
    };
}

export function rules(theme: Primer) {
    const color = getColors(theme);
    console.log(color);
    return [
        {
            class: 'popup_control',
            'layer0.tint': ['background', 1],
            'layer0.opacity': 1,
            content_margin: 0,
        },
        {
            class: 'auto_complete_details',
        },
        {
            class: 'auto_complete_info',
            spacing: 8,
        },
        {
            class: 'auto_complete',
            row_padding: 0,
            tint_index: 0,
            tint_modifier: ['background', 1],
            'layer0.opacity': 1,
        },
        {
            class: 'auto_complete_label',
            'font.face': 'var(fontFace)',
            'font.size': 'var(autoCompleteFontSize)',
            'font.italic': 'var(autoCompleteFontItalic)',
            fg: 'var(autoCompleteColor)',
            match_fg: 'var(autoCompleteMatchColor)',
            selected_fg: 'var(autoCompleteSelectedColor)',
            selected_match_fg: 'var(autoCompleteSelectedMatchColor)',
            fg_blend: 'var(autoCompleteBlend)',
        },
        {
            class: 'auto_complete_hint',
            opacity: 0.7,
            'font.italic': true,
        },
        {
            class: 'table_row',
            'layer0.tint': 'var(autoCompleteSelectedBackground)',
            'layer0.opacity': 0,
        },
        {
            class: 'table_row',
            attributes: ['selected'],
            'layer0.opacity': 1,
        },
        {
            class: 'annotation_close_button',
            content_margin: 8,
            'layer0.texture': 'Meetio Theme/textures/actions/close.png',
            'layer0.tint': 'var(colorAccent)',
            'layer0.opacity': {
                target: 0.8,
                speed: 4,
                interpolation: 'smoothstep',
            },
        },
        {
            class: 'annotation_close_button',
            attributes: ['hover'],
            'layer0.opacity': {
                target: 1,
                speed: 4,
                interpolation: 'smoothstep',
            },
        },
        {
            class: 'fold_button_control',
            'layer0.texture':
                'Meetio Theme/textures/navigation/arrow_right.png',
            'layer0.tint': 'var(colorAccent)',
            'layer0.opacity': 0.4,
            'layer0.inner_margin': 0,
            content_margin: [12, 12],
        },
        {
            class: 'fold_button_control',
            attributes: ['hover'],
            'layer0.opacity': 1,
            content_margin: [12, 12],
        },
        {
            class: 'fold_button_control',
            attributes: ['expanded'],
            'layer0.texture': 'Meetio Theme/textures/navigation/arrow_down.png',
            'layer0.tint': 'var(colorAccent)',
            content_margin: [12, 12],
        },
        {
            class: 'dialog',
            'layer0.tint': ['background', 0.94],
            'layer0.opacity': 1,
        },
        {
            class: 'dropdown_button_control',
            'layer0.texture': 'Meetio Theme/textures/actions/history.png',
            'layer0.tint': 'var(colorAccent)',
            'layer0.opacity': 1,
            'layer0.inner_margin': 0,
            content_margin: [8, 8],
        },
        {
            class: 'dropdown_button_control',
            attributes: ['hover'],
            'layer0.opacity': 0.8,
        },
        {
            class: 'disclosure_button_control',
            content_margin: [0, 0, 0, 0],
        },
        {
            class: 'disclosure_button_control',
            settings: ['show_sidebar_disclosure'],
            content_margin: [8, 8],
        },
        {
            class: 'icon_folder',
            'layer0.texture': 'GitHub Theme/textures/tree/folder.png',
            'layer0.opacity': 0.5,
            content_margin: [8, 8],
        },
        {
            class: 'icon_folder',
            parents: [{ class: 'tree_row', attributes: ['expanded'] }],
            'layer0.texture': 'GitHub Theme/textures/tree/folder-opened.png',
            content_margin: [8, 8],
        },
        {
            class: 'icon_folder_dup',
            'layer0.texture': 'GitHub Theme/textures/tree/folder-dup.png',
            content_margin: [8, 8],
        },
        {
            class: 'icon_file_type',
            'layer0.opacity': 1,
            content_margin: 'var(sidebarIconFileSize)',
        },
        {
            class: 'icon_file_type',
            parents: [
                {
                    class: 'tree_row',
                    attributes: ['hover'],
                },
            ],
            'layer0.opacity': 1,
        },
        {
            class: 'icon_file_type',
            parents: [
                {
                    class: 'tree_row',
                    attributes: ['selected'],
                },
            ],
            'layer0.opacity': 1,
        },
        {
            class: 'grid_layout_control',
            border_color: 'var(gridLayoutBorderColor)',
            border_size: 'var(gridLayoutBorderSize)',
        },
        {
            class: 'icon_button_group',
            spacing: 8,
        },
        {
            class: 'icon_button_control',
            'layer0.tint': 'var(buttonIconFileBackground)',
            'layer0.inner_margin': 0,
            'layer0.opacity': 1,
            content_margin: 8,
        },
        {
            class: 'icon_button_control',
            attributes: ['selected'],
            'layer0.tint': 'var(buttonIconFileSelectedBackground)',
        },
        {
            class: 'icon_regex',
            'layer0.texture': 'Meetio Theme/textures/find/icon_regex.png',
            'layer0.tint': 'var(buttonIconFileColor)',
            'layer0.opacity': {
                target: 0.5,
                speed: 5,
                interpolation: 'smoothstep',
            },
            content_margin: [12, 12],
        },
        {
            class: 'icon_regex',
            attributes: ['hover'],
            'layer0.opacity': {
                target: 0.9,
                speed: 5,
                interpolation: 'smoothstep',
            },
        },
        {
            class: 'icon_regex',
            parents: [
                {
                    class: 'icon_button_control',
                    attributes: ['selected'],
                },
            ],
            'layer0.tint': 'var(buttonIconFileSelectedColor)',
            'layer0.opacity': 1,
        },
        {
            class: 'icon_case',
            'layer0.texture':
                'Meetio Theme/textures/find/icon_case_sensitive.png',
            'layer0.tint': 'var(buttonIconFileColor)',
            'layer0.opacity': {
                target: 0.5,
                speed: 5,
                interpolation: 'smoothstep',
            },
            content_margin: [12, 12],
        },
        {
            class: 'icon_case',
            attributes: ['hover'],
            'layer0.opacity': {
                target: 0.9,
                speed: 5,
                interpolation: 'smoothstep',
            },
        },
        {
            class: 'icon_case',
            parents: [
                {
                    class: 'icon_button_control',
                    attributes: ['selected'],
                },
            ],
            'layer0.tint': 'var(buttonIconFileSelectedColor)',
            'layer0.opacity': 1,
        },
        {
            class: 'icon_whole_word',
            'layer0.texture': 'Meetio Theme/textures/find/icon_whole_word.png',
            'layer0.tint': 'var(buttonIconFileColor)',
            'layer0.opacity': {
                target: 0.5,
                speed: 5,
                interpolation: 'smoothstep',
            },
            content_margin: [12, 12],
        },
        {
            class: 'icon_whole_word',
            attributes: ['hover'],
            'layer0.opacity': {
                target: 0.9,
                speed: 5,
                interpolation: 'smoothstep',
            },
        },
        {
            class: 'icon_whole_word',
            parents: [
                {
                    class: 'icon_button_control',
                    attributes: ['selected'],
                },
            ],
            'layer0.tint': 'var(buttonIconFileSelectedColor)',
            'layer0.opacity': 1,
        },
        {
            class: 'icon_wrap',
            'layer0.texture': 'Meetio Theme/textures/find/icon_wrap.png',
            'layer0.tint': 'var(buttonIconFileColor)',
            'layer0.opacity': {
                target: 0.5,
                speed: 5,
                interpolation: 'smoothstep',
            },
            content_margin: [12, 12],
        },
        {
            class: 'icon_wrap',
            attributes: ['hover'],
            'layer0.opacity': {
                target: 0.9,
                speed: 5,
                interpolation: 'smoothstep',
            },
        },
        {
            class: 'icon_wrap',
            parents: [
                {
                    class: 'icon_button_control',
                    attributes: ['selected'],
                },
            ],
            'layer0.tint': 'var(buttonIconFileSelectedColor)',
            'layer0.opacity': 1,
        },
        {
            class: 'icon_in_selection',
            'layer0.texture':
                'Meetio Theme/textures/find/icon_in_selection.png',
            'layer0.tint': 'var(buttonIconFileColor)',
            'layer0.opacity': {
                target: 0.5,
                speed: 5,
                interpolation: 'smoothstep',
            },
            content_margin: [12, 12],
        },
        {
            class: 'icon_in_selection',
            attributes: ['hover'],
            'layer0.opacity': {
                target: 0.9,
                speed: 5,
                interpolation: 'smoothstep',
            },
        },
        {
            class: 'icon_in_selection',
            parents: [
                {
                    class: 'icon_button_control',
                    attributes: ['selected'],
                },
            ],
            'layer0.tint': 'var(buttonIconFileSelectedColor)',
            'layer0.opacity': 1,
        },
        {
            class: 'icon_highlight',
            'layer0.texture':
                'Meetio Theme/textures/find/icon_highlight_matches.png',
            'layer0.tint': 'var(buttonIconFileColor)',
            'layer0.opacity': {
                target: 0.5,
                speed: 5,
                interpolation: 'smoothstep',
            },
            content_margin: [12, 12],
        },
        {
            class: 'icon_highlight',
            attributes: ['hover'],
            'layer0.opacity': {
                target: 0.9,
                speed: 5,
                interpolation: 'smoothstep',
            },
        },
        {
            class: 'icon_highlight',
            parents: [
                {
                    class: 'icon_button_control',
                    attributes: ['selected'],
                },
            ],
            'layer0.tint': 'var(buttonIconFileSelectedColor)',
            'layer0.opacity': 1,
        },
        {
            class: 'icon_preserve_case',
            'layer0.texture':
                'Meetio Theme/textures/find/icon_preserve_case.png',
            'layer0.tint': 'var(buttonIconFileColor)',
            'layer0.opacity': {
                target: 0.5,
                speed: 5,
                interpolation: 'smoothstep',
            },
            content_margin: [12, 12],
        },
        {
            class: 'icon_preserve_case',
            attributes: ['hover'],
            'layer0.opacity': {
                target: 0.9,
                speed: 5,
                interpolation: 'smoothstep',
            },
        },
        {
            class: 'icon_preserve_case',
            parents: [
                {
                    class: 'icon_button_control',
                    attributes: ['selected'],
                },
            ],
            'layer0.tint': 'var(buttonIconFileSelectedColor)',
            'layer0.opacity': 1,
        },
        {
            class: 'icon_context',
            'layer0.texture': 'Meetio Theme/textures/find/icon_in_context.png',
            'layer0.tint': 'var(buttonIconFileColor)',
            'layer0.opacity': {
                target: 0.5,
                speed: 5,
                interpolation: 'smoothstep',
            },
            content_margin: [12, 12],
        },
        {
            class: 'icon_context',
            attributes: ['hover'],
            'layer0.opacity': {
                target: 0.9,
                speed: 5,
                interpolation: 'smoothstep',
            },
        },
        {
            class: 'icon_context',
            parents: [
                {
                    class: 'icon_button_control',
                    attributes: ['selected'],
                },
            ],
            'layer0.tint': 'var(buttonIconFileSelectedColor)',
            'layer0.opacity': 1,
        },
        {
            class: 'icon_use_buffer',
            'layer0.texture': 'Meetio Theme/textures/find/icon_use_buffer.png',
            'layer0.tint': 'var(buttonIconFileColor)',
            'layer0.opacity': {
                target: 0.5,
                speed: 5,
                interpolation: 'smoothstep',
            },
            content_margin: [12, 12],
        },
        {
            class: 'icon_use_buffer',
            attributes: ['hover'],
            'layer0.opacity': {
                target: 0.9,
                speed: 5,
                interpolation: 'smoothstep',
            },
        },
        {
            class: 'icon_use_buffer',
            parents: [
                {
                    class: 'icon_button_control',
                    attributes: ['selected'],
                },
            ],
            'layer0.tint': 'var(buttonIconFileSelectedColor)',
            'layer0.opacity': 1,
        },
        {
            class: 'icon_use_gitignore',
            'layer0.texture':
                'Meetio Theme/textures/find/icon_use_gitignore.png',
            'layer0.tint': 'var(buttonIconFileColor)',
            'layer0.opacity': {
                target: 0.5,
                speed: 5,
                interpolation: 'smoothstep',
            },
            content_margin: [12, 12],
        },
        {
            class: 'icon_use_gitignore',
            attributes: ['hover'],
            'layer0.opacity': {
                target: 0.9,
                speed: 5,
                interpolation: 'smoothstep',
            },
        },
        {
            class: 'icon_use_gitignore',
            parents: [
                {
                    class: 'icon_button_control',
                    attributes: ['selected'],
                },
            ],
            'layer0.tint': 'var(buttonIconFileSelectedColor)',
            'layer0.opacity': 1,
        },
        {
            class: 'text_line_control',
            'layer0.opacity': 1,
            'layer0.inner_margin': [20, 5, 20, 5],
            'layer0.tint': 'var(inputBackground)',
            'layer1.tint': 'var(inputBorderColor)',
            'layer1.opacity': 1,
            'layer1.inner_margin': 'var(inputBorderSize)',
            'layer1.draw_center': false,
            content_margin: 'var(inputBorderMargin)',
            color_scheme_tint: 'var(inputBackground)',
        },
        {
            class: 'text_line_control',
            platforms: ['osx', 'linux'],
            parents: [
                {
                    class: 'overlay_control',
                },
            ],
            'layer1.opacity': 0,
            content_margin: [52, 10, 10, 10],
            settings: ['meetio_input_search_icon'],
        },
        {
            class: 'text_line_control',
            parents: [
                {
                    class: 'overlay_control',
                },
            ],
            'layer1.opacity': 0,
            'layer2.inner_margin': [52, 48, 0, 0],
            'layer2.draw_center': false,
            'layer2.texture': 'Meetio Theme/textures/inputs/icon_search.png',
            'layer2.tint': 'var(colorAccent)',
            'layer2.opacity': 1,
            settings: ['meetio_input_search_icon'],
        },
        {
            class: 'text_line_control',
            platforms: ['osx', 'linux'],
            parents: [
                {
                    class: 'switch_project_window',
                },
            ],
            'layer1.opacity': 0,
            content_margin: [52, 10, 10, 10],
            settings: ['meetio_input_search_icon'],
        },
        {
            class: 'text_line_control',
            parents: [
                {
                    class: 'switch_project_window',
                },
            ],
            'layer2.inner_margin': [52, 48, 0, 0],
            'layer2.draw_center': false,
            'layer2.texture': 'Meetio Theme/textures/inputs/icon_search.png',
            'layer2.tint': 'var(colorAccent)',
            'layer2.opacity': 1,
            'layer1.opacity': 0,
            settings: ['meetio_input_search_icon'],
        },
        {
            class: 'label_control',
            fg: ['foreground', 1],
            'font.bold': false,
        },
        {
            class: 'label_control',
            parents: [
                {
                    class: 'button_control',
                },
            ],
            color: ['foreground', 1],
            'font.bold': true,
        },
        {
            class: 'label_control',
            parents: [
                {
                    class: 'panel_control',
                },
            ],
            color: ['foreground', 1],
            'font.bold': true,
        },
        {
            class: 'title_label_control',
            fg: ['foreground', 1],
            'font.size': 'var(fontSizeHuge)',
        },
        {
            class: 'label_control',
            parents: [
                {
                    class: 'button_control',
                },
            ],
        },
        {
            class: 'button_control',
            'layer0.tint': 'var(buttonBackground)',
            'layer0.opacity': {
                target: 0.6,
                speed: 4,
                interpolation: 'smoothstep',
            },
            'layer0.inner_margin': [6, 6],
            content_margin: [6, 10, 6, 10],
            min_size: 'var(buttonMinSize)',
        },
        {
            class: 'button_control',
            attributes: ['hover'],
            'layer0.tint': 'var(buttonBackgroundHover)',
            'layer0.opacity': 1,
        },
        {
            class: 'button_control',
            attributes: ['pressed'],
            'layer0.opacity': {
                target: 0.1,
                speed: 4,
                interpolation: 'smoothstep',
            },
        },
        {
            class: 'overlay_control',
            'layer0.texture': 'Meetio Theme/textures/overlay_bg.png',
            'layer0.inner_margin': [24, 4, 24, 33],
            'layer0.opacity': 1,
            'layer0.tint': 'var(panelControlBackground)',
            'layer1.texture':
                'Meetio Theme/textures/quick_panel_background.png',
            'layer1.inner_margin': [16, 0, 16, 25],
            'layer1.opacity': 1,
            content_margin: [12, 4, 13, 28],
        },
        {
            class: 'panel_control',
            'layer0.tint': 'var(panelControlBackground)',
            'layer0.opacity': 1,
            'layer0.inner_margin': [2, 2, 2, 2],
            'layer1.opacity': 0,
            'layer1.draw_center': false,
            'layer1.inner_margin': [0, 1, 0, 0],
            content_margin: [12, 12],
        },
        {
            class: 'panel_control',
            'layer1.opacity': 1,
            'layer1.tint': 'color(#000 l(20%))',
            settings: ['meetio_high_contrast'],
        },
        {
            class: 'panel_control',
            parents: [
                {
                    class: 'window',
                },
            ],
        },
        {
            class: 'panel_grid_control',
            inside_spacing: 4,
            outside_hspacing: 4,
            outside_vspacing: 4,
        },
        {
            class: 'panel_close_button',
            'layer0.texture': 'Meetio Theme/textures/actions/close.png',
            'layer0.tint': 'var(colorAccent)',
            'layer0.opacity': {
                target: 0.4,
                speed: 4,
                interpolation: 'smoothstep',
            },
            'layer1.opacity': 0,
            content_margin: [0, 0],
        },
        {
            class: 'panel_close_button',
            attributes: ['hover'],
            'layer0.opacity': {
                target: 0.6,
                speed: 4,
                interpolation: 'smoothstep',
            },
        },
        {
            class: 'mini_quick_panel_row',
            'layer0.tint': 'var(panelRowBackground)',
            'layer0.inner_margin': [2, 2, 2, 2],
            'layer0.opacity': 1,
        },
        {
            class: 'mini_quick_panel_row',
            attributes: ['selected'],
            'layer0.tint': 'var(panelRowSelectedBackground)',
        },
        {
            class: 'quick_panel',
            row_padding: 'var(panelRowPadding)',
            'layer0.tint': ['background', 1],
            'layer0.opacity': 1,
        },
        {
            class: 'quick_panel',
            parents: [
                {
                    class: 'overlay_control goto_symbol',
                },
            ],
            row_padding: [0, 0, 0, 0],
        },
        {
            class: 'quick_panel',
            parents: [
                {
                    class: 'overlay_control goto_symbol_in_project',
                },
            ],
            row_padding: [0, 0, 0, 0],
        },
        {
            class: 'quick_panel_row',
            'layer0.opacity': 1,
        },
        {
            class: 'quick_panel_row',
            'layer0.tint': 'var(panelRowBackground)',
            'layer0.opacity': 1,
        },
        {
            class: 'quick_panel_row',
            attributes: ['selected'],
            'layer0.tint': 'var(panelRowSelectedBackground)',
        },
        {
            class: 'quick_panel_entry',
            spacing: 1,
        },
        {
            class: 'quick_panel_label',
            'font.face': 'var(fontFace)',
            'font.size': 'var(panelRowFontSize)',
            fg: 'var(panelRowColor)',
            match_fg: 'var(panelRowMatchColor)',
            selected_fg: 'var(panelRowSelectedColor)',
            selected_match_fg: 'var(panelRowSelectedMatchColor)',
        },
        {
            class: 'quick_panel_path_label',
            'font.face': 'var(fontFace)',
            'font.size': 'var(panelPathRowFontSize)',
            fg: 'var(panelPathRowColor)',
            match_fg: 'var(panelRowMatchColor)',
            selected_fg: 'var(panelRowSelectedColor)',
            selected_match_fg: 'var(panelRowSelectedMatchColor)',
        },
        {
            class: 'quick_panel_label hint',
            'font.size': 'var(panelPathRowFontSize)',
            'font.italic': true,
        },
        {
            class: 'quick_panel_label key_binding',
            'font.size': 'var(panelPathRowFontSize)',
        },
        {
            class: 'scroll_area_control',
            settings: ['overlay_scroll_bars'],
            overlay: true,
        },
        {
            class: 'scroll_area_control',
            settings: ['!overlay_scroll_bars'],
            overlay: false,
        },
        {
            class: 'scroll_area_control',
            parents: [
                {
                    class: 'sidebar_container',
                },
            ],
            content_margin: [0, 10, 0, 10],
        },
        {
            class: 'scroll_bar_control',
            'layer0.opacity': 1,
            content_margin: 4,
            tint_index: 0,
        },
        {
            class: 'scroll_bar_control',
            settings: ['overlay_scroll_bars'],
            'layer0.opacity': 0,
        },
        {
            class: 'scroll_bar_control',
            settings: ['!overlay_scroll_bars'],
            'layer0.opacity': 1,
        },
        {
            class: 'scroll_bar_control',
            parents: [
                {
                    class: 'popup_control auto_complete_popup',
                },
            ],
            tint_modifier: [0, 0, 0, 0.05],
        },
        {
            class: 'scroll_bar_control',
            parents: [
                {
                    class: 'switch_project_window',
                },
            ],
            'layer0.tint': [235, 237, 239],
            tint_index: -1,
        },
        {
            class: 'scroll_bar_control',
            parents: [
                {
                    class: 'sidebar_container',
                },
            ],
            'layer0.opacity': 0,
        },
        {
            class: 'scroll_corner_control',
            parents: [
                {
                    class: 'sidebar_container',
                },
            ],
            'layer0.opacity': 0,
        },
        {
            class: 'scroll_bar_control',
            parents: [
                {
                    class: 'overlay_control',
                },
            ],
            'layer0.opacity': 0,
            content_margin: [4, 0, 0, 0],
        },
        {
            class: 'scroll_track_control',
            'layer0.tint': 'var(scrollBar)',
            'layer0.opacity': 1,
            'layer0.inner_margin': 2,
            content_margin: [4, 4, 3, 4],
        },
        {
            class: 'puck_control',
            'layer0.tint': 'var(scrollTrack)',
            'layer0.opacity': 1,
        },
        {
            class: 'scroll_corner_control',
            'layer0.opacity': 1,
            tint_index: 0,
        },
        {
            class: 'scroll_track_control',
            attributes: ['horizontal'],
            'layer0.tint': 'var(scrollBar)',
            content_margin: [4, 4, 4, 3],
        },
        {
            class: 'puck_control',
            attributes: ['horizontal'],
            'layer0.tint': 'var(scrollTrack)',
        },
        {
            class: 'sidebar_container',
            'layer0.tint': 'var(sidebarBackground)',
            'layer1.inner_margin': [0, 1, 1, 0],
            'layer0.opacity': 1,
            'layer1.draw_center': false,
            content_margin: [0, 6, 0, 0],
        },
        {
            class: 'sidebar_container',
            'layer0.tint': 'color(var(sidebarBackground) alpha(0.8))',
            'layer1.tint': 'color(#000 l(20%))',
            'layer1.opacity': 1,
            settings: ['meetio_high_contrast'],
        },
        {
            class: 'sidebar_tree',
            row_padding: [14, 3],
            indent: 20,
            indent_offset: 14,
            indent_top_level: false,
            dark_content: false,
            spacer_rows: true,
        },
        {
            class: 'tree_row',
            attributes: ['hover'],
            'layer0.tint': 'var(treeHoverBg)',
            'layer0.opacity': 1.0,
        },
        {
            class: 'tree_row',
            attributes: ['selected'],
            'layer0.tint': 'var(treeSelectedBg)',
            'layer0.opacity': 1.0,
        },
        {
            class: 'sidebar_heading',
            fg: 'var(sidebarHeadingFg)',
        },
        {
            class: 'sidebar_label',
            parents: [{ class: 'file_system_entry', attributes: ['ignored'] }],
            color: 'color(var(vcsIgnored)',
        },
        {
            class: 'sidebar_label',
            parents: [
                { class: 'file_system_entry', attributes: ['untracked'] },
            ],
            color: 'var(vcsUntracked)',
        },
        {
            class: 'sidebar_label',
            parents: [{ class: 'file_system_entry', attributes: ['modified'] }],
            color: 'var(vcsModified)',
        },
        {
            class: 'sidebar_label',
            parents: [{ class: 'file_system_entry', attributes: ['added'] }],
            color: 'var(vcsUntracked)',
        },
        {
            class: 'sidebar_label',
            parents: [{ class: 'file_system_entry', attributes: ['unmerged'] }],
            color: 'var(vcsUnmerged)',
        },
        {
            class: 'sidebar_label',
            parents: [{ class: 'file_system_entry', attributes: ['missing'] }],
            color: 'var(vcsMissing)',
        },
        {
            class: 'sidebar_label',
            parents: [{ class: 'file_system_entry', attributes: ['deleted'] }],
            color: 'var(vcsDeleted)',
        },
        {
            class: 'sidebar_label',
            parents: [{ class: 'file_system_entry', attributes: ['staged'] }],
            color: 'var(vcsStaged)',
        },
        {
            class: 'progress_bar_control',
            'layer0.tint': ['background', 0.94],
            'layer0.opacity': 1,
        },
        {
            class: 'progress_gauge_control',
            'layer0.tint': 'var(progressBarBackground)',
            'layer0.opacity': 1,
            content_margin: [0, 8],
        },
        {
            class: 'status_bar',
            'layer0.opacity': 1,
            'layer0.tint': 'var(statusbarBackground)',
            content_margin: [10, 4, 0, 4],
            'layer1.inner_margin': [0, 1, 0, 0],
            'layer1.opacity': 0,
            'layer1.draw_center': false,
        },
        {
            class: 'status_bar',
            'layer0.tint': 'color(var(statusbarBackground) alpha(0.8))',
            'layer1.tint': 'color(#000 l(20%))',
            'layer1.opacity': 1,
            settings: ['meetio_high_contrast'],
        },
        {
            class: 'panel_button_control',
            'layer0.texture': 'Meetio Theme/textures/actions/more.png',
            'layer0.tint': 'var(statusbarIconColor)',
            'layer0.opacity': 1,
            content_margin: 9,
            'layer0.inner_margin': 4,
        },
        {
            class: 'panel_button_control',
            attributes: ['hover'],
            'layer0.opacity': 0.8,
        },
        {
            class: 'vcs_branch_icon',
            settings: ['!meetio_status_badges'],
            content_margin: 0,
            'layer0.texture': '',
            'layer0.opacity': 0,
        },
        {
            class: 'vcs_branch_icon',
            settings: ['meetio_status_badges'],
            'layer0.texture': 'Meetio Theme/textures/actions/branch.png',
            content_margin: 8,
            'layer0.tint': 'var(statusbarIconColor)',
            'layer0.inner_margin': 2,
            'layer0.opacity': 1,
        },
        {
            class: 'vcs_branch_icon',
            attributes: ['hover'],
            'layer0.opacity': 0.8,
        },
        {
            class: 'status_container',
            content_margin: [8, 0, 0, 0],
        },
        {
            class: 'status_button',
            content_margin: [10, 0, 10, 0],
            min_size: [80, 0],
        },
        {
            class: 'label_control',
            parents: [
                {
                    class: 'status_bar',
                },
            ],
            'font.size': 'var(fontSizeSm)',
            color: 'var(statusbarLabelColor)',
            'font.bold': false,
        },
        {
            class: 'symbol_container',
            content_margin: 4,
        },
        {
            class: 'symbol_container',
            platforms: ['windows'],
            content_margin: 4,
        },
        {
            class: 'scroll_tabs_left_button',
            'layer0.texture':
                'GitHub Theme/textures/navigation/arrow-small-left.png',
            'layer0.opacity': {
                target: 0.5,
                speed: 4.0,
                interpolation: 'smoothstep',
            },
            'layer0.tint': ['foreground', 1.0],
            content_margin: [10, 10],
        },
        {
            class: 'scroll_tabs_left_button',
            attributes: ['hover'],
            'layer0.opacity': {
                target: 1.0,
                speed: 4.0,
                interpolation: 'smoothstep',
            },
        },
        {
            class: 'scroll_tabs_right_button',
            'layer0.texture':
                'GitHub Theme/textures/navigation/arrow-small-right.png',
            'layer0.opacity': {
                target: 0.5,
                speed: 4.0,
                interpolation: 'smoothstep',
            },
            'layer0.tint': ['foreground', 1.0],
            content_margin: [10, 10],
        },
        {
            class: 'scroll_tabs_right_button',
            attributes: ['hover'],
            'layer0.opacity': {
                target: 1.0,
                speed: 4.0,
                interpolation: 'smoothstep',
            },
        },
        {
            class: 'show_tabs_dropdown_button',
            'layer0.texture': 'GitHub Theme/textures/navigation/more.png',
            'layer0.opacity': {
                target: 0.5,
                speed: 4.0,
                interpolation: 'smoothstep',
            },
            'layer0.tint': ['foreground', 1.0],
            content_margin: [10, 10],
        },
        {
            class: 'show_tabs_dropdown_button',
            attributes: ['hover'],
            'layer0.opacity': {
                target: 1.0,
                speed: 4.0,
                interpolation: 'smoothstep',
            },
        },
        {
            class: 'tabset_control',
            'layer0.tint': 'var(tabInactiveBackground)',

            'layer1.draw_center': false,
            'layer1.inner_margin': [0, 1, 1, 1],
            'layer1.tint': 'var(tabBorder)',
            'layer1.opacity': 1,

            content_margin: [0, 0, 8, 0],
        },
        {
            class: 'tabset_control',
            'layer0.opacity': 1,
            tint_index: 1,
            tab_overlap: 0,
            tab_width: 90,
            tab_height: 40,
            mouse_wheel_switch: false,
        },
        {
            class: 'tab_control',
            'layer0.texture': '',
            'layer0.tint': 'var(tabInactiveBackground)',
            'layer0.opacity': 1,

            'layer1.texture': '',
            'layer1.tint': 'var(tabInactiveBackground)',
            'layer1.opacity': 1,

            'layer2.draw_center': false,
            'layer2.texture': '',
            'layer2.tint': 'var(tabBorder)',
            'layer2.inner_margin': [0, 1, 1, 1],
            'layer2.opacity': 1,

            'layer3.draw_center': false,
            'layer3.texture': '',
            'layer3.tint': 'var(tabBorder)',
            'layer3.inner_margin': [0, 0, 1, 1],
            'layer3.opacity': 1,
            tint_modifier: 'var(tabInactiveBackground)',
        },
        {
            class: 'tab_control',
            attributes: ['selected'],
            'layer1.tint': 'var(tabActiveBackground)',

            'layer2.inner_margin': [0, 1, 1, 0],

            'layer3.inner_margin': [0, 1, 0, 0],
            'layer3.tint': 'var(tabSelectedBorderBorderColor)',
            tint_modifier: 'var(tabActiveBackground)',
        },

        {
            class: 'show_tabs_dropdown_button',
            attributes: ['hover'],
            'layer0.opacity': 1,
        },
        {
            class: 'title_bar',
            bg: 'var(titleBarBackground)',
            fg: 'var(titleBarColor)',
        },
        {
            class: 'tool_tip_control',
            'layer0.tint': 'var(tooltipBackground)',
            'layer0.opacity': 1,
            content_margin: [12, 8],
        },
        {
            class: 'tool_tip_label_control',
            fg: 'var(tooltipLabelColor)',
        },
        {
            class: 'vcs_status_badge',
            parents: [
                {
                    class: 'file_system_entry',
                    attributes: ['untracked'],
                },
            ],
            'layer0.texture': 'Meetio Theme/textures/vcs/vcs_untracked.png',
            'layer0.tint': 'var(vcsUntracked)',
            content_margin: 'var(vcsBadgeSize)',
        },
        {
            class: 'vcs_status_badge',
            parents: [
                {
                    class: 'file_system_entry',
                    attributes: ['modified'],
                },
            ],
            'layer0.texture': 'Meetio Theme/textures/vcs/vcs_modified.png',
            'layer0.tint': 'var(vcsModified)',
            content_margin: 'var(vcsBadgeSize)',
        },
        {
            class: 'vcs_status_badge',
            parents: [
                {
                    class: 'file_system_entry',
                    attributes: ['added'],
                },
            ],
            'layer0.texture': 'Meetio Theme/textures/vcs/vcs_added.png',
            'layer0.tint': 'var(vcsUntracked)',
            content_margin: 'var(vcsBadgeSize)',
        },
        {
            class: 'vcs_status_badge',
            parents: [
                {
                    class: 'file_system_entry',
                    attributes: ['unmerged'],
                },
            ],
            'layer0.texture': 'Theme - Default/common/status_unmerged.png',
            'layer0.tint': 'var(vcsUnmerged)',
            content_margin: 'var(vcsBadgeSize)',
        },
        {
            class: 'vcs_status_badge',
            parents: [
                {
                    class: 'file_system_entry',
                    attributes: ['staged'],
                },
            ],
            'layer0.texture': 'Meetio Theme/textures/vcs/vcs_staged.png',
            'layer0.tint': 'var(vcsStaged)',
            content_margin: 'var(vcsBadgeSize)',
        },
        {
            class: 'vcs_status_badge',
            parents: [
                {
                    class: 'file_system_entry',
                    attributes: ['deleted'],
                },
            ],
            'layer0.tint': 'var(vcsDeleted)',
            content_margin: 'var(vcsBadgeSize)',
        },
        {
            class: 'vcs_status_badge',
            parents: [
                {
                    class: 'file_system_entry',
                    attributes: ['missing'],
                },
            ],
            'layer0.tint': 'var(vcsMissing)',
            content_margin: 'var(vcsBadgeSize)',
        },
        {
            class: 'vcs_status_badge',
            parents: [
                {
                    class: 'tree_row',
                    attributes: ['expandable'],
                },
            ],
            'layer0.texture': 'Theme - Default/common/status_modified.png',
        },
        {
            class: 'vcs_status_badge',
            parents: [
                {
                    class: 'tree_row',
                    attributes: ['expandable'],
                },
                {
                    class: 'file_system_entry',
                    attributes: ['unmerged'],
                },
            ],
            'layer0.texture': 'Theme - Default/common/status_unmerged.png',
        },
        {
            class: 'sidebar_label',
            parents: [
                {
                    class: 'file_system_entry',
                    attributes: ['ignored'],
                },
            ],
            color: 'color(var(vcsIgnored)',
        },
        {
            class: 'sidebar_label',
            parents: [
                {
                    class: 'file_system_entry',
                    attributes: ['untracked'],
                },
            ],
            color: 'var(vcsUntracked)',
        },
        {
            class: 'sidebar_label',
            parents: [
                {
                    class: 'file_system_entry',
                    attributes: ['modified'],
                },
            ],
            color: 'var(vcsModified)',
        },
        {
            class: 'sidebar_label',
            parents: [
                {
                    class: 'file_system_entry',
                    attributes: ['added'],
                },
            ],
            color: 'var(vcsUntracked)',
        },
        {
            class: 'sidebar_label',
            parents: [
                {
                    class: 'file_system_entry',
                    attributes: ['unmerged'],
                },
            ],
            color: 'var(vcsUnmerged)',
        },
        {
            class: 'sidebar_label',
            parents: [
                {
                    class: 'file_system_entry',
                    attributes: ['missing'],
                },
            ],
            color: 'var(vcsMissing)',
        },
        {
            class: 'sidebar_label',
            parents: [
                {
                    class: 'file_system_entry',
                    attributes: ['deleted'],
                },
            ],
            color: 'var(vcsDeleted)',
        },
        {
            class: 'sidebar_label',
            parents: [
                {
                    class: 'file_system_entry',
                    attributes: ['staged'],
                },
            ],
            color: 'var(vcsStaged)',
        },
        {
            class: 'vcs_changes_annotation',
            border_color: 'var(statusbarLabelColor)',
            content_margin: [3, 1, 3, 1],
        },
        {
            class: 'minimap_control',
            settings: ['always_show_minimap_viewport'],
            viewport_color: 'color(var(colorAccent) a(0.2))',
            viewport_opacity: 'var(minimapOpacity)',
        },
        {
            class: 'minimap_control',
            settings: ['!always_show_minimap_viewport'],
            viewport_opacity: {
                target: 0,
                speed: 4,
                interpolation: 'smoothstep',
            },
        },
        {
            class: 'minimap_control',
            attributes: ['hover'],
            settings: ['!always_show_minimap_viewport'],
            viewport_opacity: {
                target: 0.4,
                speed: 20,
                interpolation: 'smoothstep',
            },
        },
        {
            class: 'close_button',
            'layer0.texture': 'Meetio Theme/textures/actions/close.png',
            'layer0.tint': 'var(colorAccent)',
            'layer0.opacity': 1,
            'layer0.inner_margin': [3, 3],
            content_margin: [8, 8],
        },
        {
            class: 'close_button',
            parents: [
                {
                    class: 'tree_row',
                    attributes: ['hover'],
                },
            ],
            'layer0.opacity': 1,
        },
        {
            class: 'close_button',
            attributes: ['dirty'],
            'layer0.texture': 'Meetio Theme/textures/dirty_icon.png',
            'layer0.tint': 'var(colorAccent)',
        },
        {
            class: 'close_button',
            attributes: ['hover', 'dirty'],
            'layer0.texture': 'Meetio Theme/textures/dirty_icon.png',
            'layer0.tint': 'var(colorAccent)',
        },
    ];
}

export function getTheme(theme: Primer): ThemeSetting {
    return {
        extends: 'Default.sublime-theme',
        variables: variables(theme),
        rules: rules(theme),
    };
}

export function generateTheme(options: GenerateTheme) {
    const { settings, output } = options;

    // eslint-disable-next-line no-undef
    const dist = output.path || path.resolve(__dirname, '../');

    fs.mkdir(dist, () => {
        try {
            fs.writeFileSync(
                `${dist}/${output.filename}${
                    output.extension || '.sublime-theme'
                }`,
                JSON.stringify(
                    {
                        extends: settings.extends,
                        variables: settings.variables || [],
                        rules: settings.rules,
                    },
                    null,
                    4
                )
            );
            console.log(output.filename, dist);
        } catch (e) {
            console.error(e);
        }
    });
}
