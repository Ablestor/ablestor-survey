var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import classnames from 'classnames';
import { BlockTypes } from '../../@types/block';
import { BlockContainer } from './styled';
import { Input, Textarea, Select, Switch, RangeSelector, OptionMultipleSelector, OptionSingleSelector, CheckBox, } from '../../components/Inputs';
import { Description, Text, Title } from '../../components/Texts';
import { FlexContainer, FlexElement, Row } from '../../components/Section';
import { defaultTheme } from '../..';
export var BlockPresenter = function (_a) {
    var block = _a.block;
    return (_jsxs(BlockContainer, __assign({ className: classnames({
            required: block.required,
        }) }, { children: [_jsx(Row, { children: _jsxs(FlexContainer, { children: [block.required && (_jsx(FlexElement, __assign({ width: 7 }, { children: _jsx(Title, __assign({ style: { color: defaultTheme.main } }, { children: "*" }), void 0) }), void 0)), _jsx(FlexElement, __assign({ width: 'flex' }, { children: block.title }), void 0)] }, void 0) }, void 0), _jsx(Row, { children: _jsx(Description, { children: block.description }, void 0) }, void 0), block.type === BlockTypes.SHORT_TEXT && (_jsx(Row, { children: _jsx(Input, { placeholder: '이 곳에 입력해주세요.' }, void 0) }, void 0)), block.type === BlockTypes.LONG_TEXT && (_jsx(Row, { children: _jsx(Textarea, { placeholder: '이 곳에 입력해주세요.' }, void 0) }, void 0)), block.type === BlockTypes.SWITCH && (_jsx(Row, { children: _jsxs(FlexContainer, { children: [_jsx(FlexElement, __assign({ width: 'flex' }, { children: _jsx(Text, { children: block.format.options[0] }, void 0) }), void 0), _jsx(FlexElement, __assign({ width: 40 }, { children: _jsx(Switch, {}, void 0) }), void 0)] }, void 0) }, void 0)), block.type === BlockTypes.CHECK_BOX && (_jsx(Row, { children: _jsxs(FlexContainer, { children: [_jsx(FlexElement, __assign({ width: 'flex' }, { children: _jsx(Text, { children: block.format.options[0] }, void 0) }), void 0), _jsx(FlexElement, __assign({ width: 40 }, { children: _jsx(CheckBox, { shape: 'square', value: false }, void 0) }), void 0)] }, void 0) }, void 0)), block.type === BlockTypes.SINGLE_SELECT && (_jsx(Row, { children: _jsx(OptionSingleSelector, { options: block.format.options }, void 0) }, void 0)), block.type === BlockTypes.MULTI_SELECT && (_jsx(Row, { children: _jsx(OptionMultipleSelector, { options: block.format.options }, void 0) }, void 0)), block.type === BlockTypes.DROPDOWN && (_jsx(Row, { children: _jsx(Select, { items: block.format.options.map(function (option) { return ({ label: option, value: option }); }) }, void 0) }, void 0)), block.type === BlockTypes.RANGE && (_jsx(_Fragment, { children: _jsxs(Row, { children: [_jsx(FlexElement, __assign({ width: 140 }, { children: _jsx(Text, { children: block.format.minTitle }, void 0) }), void 0), _jsx(FlexElement, __assign({ width: 'flex' }, { children: _jsx(RangeSelector, { min: block.format.min, max: block.format.max, value: block.format.min }, void 0) }), void 0), _jsx(FlexElement, __assign({ width: 140, style: {
                                textAlign: 'right',
                            } }, { children: _jsx(Text, { children: block.format.maxTitle }, void 0) }), void 0)] }, void 0) }, void 0)), block.type === BlockTypes.DATE && (_jsxs(Row, { children: [_jsx(Text, { children: "\uB0A0\uC9DC\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694." }, void 0), _jsx(FlexElement, __assign({ width: 170 }, { children: _jsx(Text, { children: JSON.stringify(block.format) }, void 0) }), void 0)] }, void 0)), block.type === BlockTypes.TIME && (_jsxs(Row, { children: [_jsx(Text, { children: "\uC2DC\uAC04\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694." }, void 0), _jsx(FlexElement, __assign({ width: 170 }, { children: _jsx(Text, { children: JSON.stringify(block.format) }, void 0) }), void 0)] }, void 0))] }), void 0));
};
