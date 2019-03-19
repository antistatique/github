[
  {
    color: 'ffa952',
    description : 'Business Value',
    name: 'priority: Important',
  },
  {
    color: 'ef5a5a',
    description : 'priority: Urgent',
    name: 'priority: Urgent',
  },
  {
    color: 'F7F052',
    description : 'project: Change request',
    name: 'project: Change request',
  },
  {
    color: '38726C',
    description : 'Client feedback needed',
    name: 'project: Client needed',
  },
  {
    color: 'F28123',
    description : 'project: Estimate needed',
    name: 'project: Estimate needed',
  },
  {
    color: '93646A',
    description : 'skill: Backend',
    name: 'skill: Backend',
  },
  {
    color: 'FFAC7F',
    description : 'skill: Conception',
    name: 'skill: Conception',
  },
  {
    color: 'FFCFA0',
    description : 'skill: Design',
    name: 'skill: Design',
  },
  {
    color: 'F46E6E',
    description : 'skill: Frontend',
    name: 'skill: Frontend',
  },
  {
    color: 'FFA8A8',
    description : 'skill: Marketing',
    name: 'skill: Marketing',
  },
  {
    color: 'CCC5B9',
    description : 'See another issue',
    name: 'status: Duplicate',
  },
  {
    color: 'dbb004',
    description : 'status: Help Wanted',
    name: 'status: Help Wanted',
  },
  {
    color: 'FFFCF2',
    description : 'Lost in the abyss',
    name: 'status: Won\'t fix',
  },
  {
    color: 'ceddef',
    description : '30min',
    name: 'time: ½',
  },
  {
    color: 'a7c4e6',
    description : '1 hour',
    name: 'time: 1',
  },
  {
    color: '7facdd',
    description : '2 hours',
    name: 'time: 2',
  },
  {
    color: '5893d4',
    description : 'time: 3',
    name: 'time: 3',
  },
  {
    color: '4576bb',
    description : 'time: 5',
    name: 'time: 5',
  },
  {
    color: '3259a1',
    description : 'time: 8',
    name: 'time: 8',
  },
  {
    color: '1f3c88',
    description : 'time: 13',
    name: 'time: 13',
  },
  {
    color: '172c78',
    description : 'time: 21',
    name: 'time: 21',
  },
  {
    color: 'fd0054',
    description : 'Something is broken',
    name: 'type: Bug',
  },
  {
    color: 'a6cb12',
    description : 'Something can be better',
    name: 'type: Enhancement',
  },
  {
    color: '75cac3',
    description : 'Something to update',
    name: 'type: Maintenance',
  },
  {
    color: '8293ff',
    description : 'Something new',
    name: 'type: New feature',
  },
  {
    color: 'ffcd3c',
    description : 'Something to ask',
    name: 'type: Question',
  },
  {
    color: 'ffb480',
    description : 'Feedbacks to give',
    name: 'type: Review',
  },
].forEach(function(label) {
  addLabel(label);
});

function updateLabel(label) {
  var flag = false;
  [].slice
    .call(document.querySelectorAll('.labels-list-item'))
    .forEach(function(element) {
      if (
        element.querySelector('.label-link').textContent.trim() === label.name
      ) {
        flag = true;
        element.querySelector('.js-edit-label').click();
        element.querySelector('.js-new-label-name-input').value = label.name;
        element.querySelector('.js-new-label-description-input').value =
          label.description;
        element.querySelector('.js-new-label-color-input').value =
          '#' + label.color;
        element.querySelector('.js-edit-label-cancel ~ .btn-primary').click();
      }
    });
  return flag;
}

function addNewLabel(label) {
  document.querySelector('.js-new-label-name-input').value = label.name;
  document.querySelector('.js-new-label-description-input').value =
    label.description;
  document.querySelector('.js-new-label-color-input').value = '#' + label.color;
  document.querySelector('.js-details-target ~ .btn-primary').disabled = false;
  document.querySelector('.js-details-target ~ .btn-primary').click();
}

function addLabel(label) {
  if (!updateLabel(label)) addNewLabel(label);
}
