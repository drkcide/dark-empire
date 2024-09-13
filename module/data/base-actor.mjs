export default class DarkEmpireActorBase extends foundry.abstract
  .TypeDataModel {
  static LOCALIZATION_PREFIXES = ["DARK_EMPIRE.Actor.base"];

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = {};

    schema.structure_points = new fields.SchemaField({
      value: new fields.NumberField({
        ...requiredInteger,
        initial: 0,
        min: 0,
      }),
      max: new fields.NumberField({ ...requiredInteger, initial: 0 }),
    });
    schema.blood_points = new fields.SchemaField({
      value: new fields.NumberField({ ...requiredInteger, initial: 5, min: 0 }),
      max: new fields.NumberField({ ...requiredInteger, initial: 5 }),
    });
    schema.biography = new fields.HTMLField();

    return schema;
  }
}
