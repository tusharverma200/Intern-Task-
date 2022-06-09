let task = {
    fetchData: function (json) {
      fetch("https://dev.deepthought.education/assets/uploads/files/others/project.json")
        .then((response) => response.json())
        .then((data) => this.displayData(data));
    },
    displayData: function (data) {
      const data_array = data.tasks[0].assets;
      console.log(data_array);
    },
  };
  
  task.fetchData();
  