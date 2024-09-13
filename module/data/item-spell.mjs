import DarkEmpireItemBase from './base-item.mjs';

export default class DarkEmpireSpell extends DarkEmpireItemBase {
  static LOCALIZATION_PREFIXES = [
    'DARK_EMPIRE.Item.base',
    'DARK_EMPIRE.Item.Spell',
  ];

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = super.defineSchema();

    schema.spellLevel = new fields.NumberField({
      required: true,
      nullable: false,
      integer: true,
      initial: 1,
      min: 1,
      max: 9,
    });

    return schema;
  }
}
