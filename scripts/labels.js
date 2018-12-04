[
  {
    name: 'bugfix',
    color: 'ff0000',
    description: 'A cool description about the label bugfix',
  },
  {
    name: 'feature',
    color: '00ff00',
    description: 'A cool description about the label feature',
  },
  {
    name: 'hotfix',
    color: '0000ff',
    description: 'A cool description about the label hotfix',
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
