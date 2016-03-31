var React = require("react-native");

var {
  View,
  Text,
  AppRegistry,
  ListView,
  StyleSheet
} = React;

var AwesomeAnswers = React.createClass({
  getInitialState: function(){
    return {questionDS: this.generateDataSource([])};
  },
  generateDataSource: function(questions) {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return ds.cloneWithRows(questions);
  },
  render: function() {
    return <View style={styles.container}>
            <Text>Awesome Answers</Text>
            <ListView
               dataSource={this.state.questionDS}
               renderRow={(question) => <Text>{question.title}</Text>}
             />
           </View>;
  },
  componentDidMount: function(){
    fetch("http://localhost:3000/questions.json")
    .then(function(data){
      return data.json();
    })
    .then((json) => {
      this.setState({questionDS: this.generateDataSource(json.questions)});
    });
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

// AppRegistry.registerComponent("AwesomeAnswers", function(){
//   return AwesomeAnswers;
// });
AppRegistry.registerComponent("AwesomeAnswers", () => AwesomeAnswers);
