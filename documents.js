Documents = new orion.collection('documents', {
  tabular: {
    columns: [
      { data: 'title', title: 'Title' },
      orion.attributeColumn('file', 'image', 'Image'),
      orion.attributeColumn('createdBy', 'createdBy', 'Created By')
    ]
  }
});

Documents.attachSchema(new SimpleSchema({
  title: { type: String },
  image: orion.attribute('file', { label: 'Image' }),
  createdBy: orion.attribute('createdBy')
}));
