import { IEnumFactory } from './i-enum-factory';
import { IParser } from './i-parser';

export interface IToEnumValueParseOption {
    enumName: string;
    itemField: string;
    itemValue: any;
}

export class ToEnumValueParser implements IParser {
    public constructor(
        private m_EnumFactory: IEnumFactory,
    ) { }

    public async parse(v: IToEnumValueParseOption) {
        const item = await this.m_EnumFactory.build(v.enumName).get(r => {
            return r[v.itemField] == v.itemValue;
        });
        return item.value ?? -1;
    }
}