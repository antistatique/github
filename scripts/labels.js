[{
    name: 'priority: Important',
    color: 'ffa952',
  },
  {
    name: 'priority: Urgent',
    color: 'ef5a5a',
  },
  {
    name: 'project: Change request',
    color: 'ffa726',
  },
  {
    name: 'project: Client needed',
    color: 'ffca28',
  },
  {
    name: 'project: Estimate needed',
    color: 'ffee58',
  },
  {
    name: 'skill: Backend',
    color: '90caf9',
  },
  {
    name: 'skill: Conception',
    color: '9fa8da',
  },
  {
    name: 'skill: Design',
    color: 'b39ddb',
  },
  {
    name: 'skill: Frontend',
    color: 'ce93d8',
  },
  {
    name: 'skill: Marketing',
    color: 'f48fb1',
  },
  {
    name: 'status: Duplicate',
    color: '4e342e',
  },
  {
    name: 'status: Help Wanted',
    color: '424242',
  },
  {
    name: "status: Won't fix",
    color: '37474f',
  },
  {
    name: 'time: 1',
    color: 'a7c4e6',
  },
  {
    name: 'time: 13',
    color: '1f3c88',
  },
  {
    name: 'time: 2',
    color: '7facdd',
  },
  {
    name: 'time: 21',
    color: '172c78',
  },
  {
    name: 'time: 3',
    color: '5893d4',
  },
  {
    name: 'time: 5',
    color: '4576bb',
  },
  {
    name: 'time: 8',
    color: '3259a1',
  },
  {
    name: 'time: ½',
    color: 'ceddef',
  },
  {
    name: 'type: Bug',
    color: 'fd0054',
  },
  {
    name: 'type: Enhancement',
    color: 'a6cb12',
  },
  {
    name: 'type: Maintenance',
    color: '75cac3',
  },
  {
    name: 'type: New feature',
    color: '8293ff',
  },
  {
    name: 'type: Question',
    color: 'ffcd3c',
  },
  {
    name: 'type: Review',
    color: 'ffb480',
  },
  {
    name: 'type: Styleguide',
    color: '29b6f6',
  }
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
