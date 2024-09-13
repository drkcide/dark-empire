import DarkEmpireItemBase from './base-item.mjs';

export default class DarkEmpireFeature extends DarkEmpireItemBase {
  static LOCALIZATION_PREFIXES = [
    'DARK_EMPIRE.Item.base',
    'DARK_EMPIRE.Item.Feature',
  ];

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    schema.selectedAbility = new fields.SchemaField({
      ability_type: new fields.SchemaField({
        value: new fields.StringField({ ...requiredInteger, initial: 'str' }),
        options: new fields.StringField({ initial: JSON.stringify({
          "str": "Strength",
          "con": "Constitution",
          "dex": "Dexterity",
          "awa": "Awareness",
          "exp": "Experience",
          "rea": "Reaction",
          "foc": "Focus"
        })})
      }),
    });
    schema.weight = new fields.NumberField({
      required: true,
      nullable: false,
      initial: 0,
      min: 0,
    });

    // Break down roll formula into three independent fields
    schema.roll = new fields.SchemaField({
      diceNum: new fields.NumberField({
        ...requiredInteger,
        initial: 1,
        min: 1,
      }),
      diceSize: new fields.StringField({ initial: 'd20' }),
      diceBonus: new fields.StringField({
        initial: '+@str.mod+ceil(@lvl / 2)',
      }),
    });

    schema.formula = new fields.StringField({ blank: true });

    return schema;
  }
}