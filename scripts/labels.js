[
  {
    name: 'priority: Critical',
    color: 'ef5a5a',
    description: '',
  },
  {
    name: 'priority: High',
    color: 'ffa952',
    description: '',
  },
  {
    name: 'priority: Low',
    color: 'feffdf',
    description: '',
  },
  {
    name: 'priority: Medium',
    color: 'ffe79a',
    description: '',
  },
  {
    name: 'status: Abandonned',
    color: '373640',
    description: 'Lost in the abyss',
  },
  {
    name: 'status: Accepted',
    color: '2e5a1c',
    description: 'Client accepted',
  },
  {
    name: 'status: Blocked',
    color: '7c203a',
    description: 'We just have to wait',
  },
  {
    name: 'status: Review needed',
    color: '1b3c59',
    description: 'Need some review here',
  },
  {
    name: 'status: Revision needed',
    color: '681a1e',
    description: 'Need some revision here',
  },
  {
    name: 'time: 1',
    color: 'a7c4e6',
    description: '1 hour',
  },
  {
    name: 'time: 13',
    color: '1f3c88',
    description: '',
  },
  {
    name: 'time: 2',
    color: '7facdd',
    description: '2 hours',
  },
  {
    name: 'time: 21',
    color: '172c78',
    description: '',
  },
  {
    name: 'time: 3',
    color: '5893d4',
    description: '',
  },
  {
    name: 'time: 34',
    color: '0f1d69',
    description: '',
  },
  {
    name: 'time: 5',
    color: '4576bb',
    description: '',
  },
  {
    name: 'time: 55',
    color: '070d59',
    description: '',
  },
  {
    name: 'time: 8',
    color: '3259a1',
    description: '',
  },
  {
    name: 'time: ½',
    color: 'ceddef',
    description: '30min',
  },
  {
    name: 'type: Bug',
    color: 'fd0054',
    description: 'Something is broken',
  },
  {
    name: 'type: Enhancement',
    color: 'a6cb12',
    description: 'Something can be better',
  },
  {
    name: 'type: Maintenance',
    color: '75cac3',
    description: 'Something to update',
  },
  {
    name: 'type: New feature',
    color: '8293ff',
    description: 'Something new',
  },
  {
    name: 'type: Question',
    color: 'ffcd3c',
    description: 'Something to ask',
  },
  {
    name: 'type: Review',
    color: 'ffb480',
    description: 'Feedbacks to give',
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
