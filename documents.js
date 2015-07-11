Documents = new orion.collection('documents', {
  tabular: {
    columns: [
      { data: 'title', title: 'Title' },
      orion.attributeColumn('image', 'image', 'Image'),
      orion.attributeColumn('createdBy', 'createdBy', 'Created By')
    ]
  }
});

Documents.attachSchema(new SimpleSchema({
  title: { type: String },
  image: orion.attribute('image', {
    label: 'Image',
    optional: true
  }),
  createdBy: orion.attribute('createdBy')
}));
