import React, {Component} from "react";
import ReactNative from "react-native";

var {
	StyleSheet,
	ScrollView,
	View,
	TouchableWithoutFeedback,
	Dimensions

} = ReactNative;


class OptionList extends Component {


	render() {
		const {style, children, onSelect} = this.props;
		const renderedItems = React.Children.map(children, (item) => {

	      return (
	        <TouchableWithoutFeedback onPress={() => onSelect(item.props.children, item.props.value) }>
	          <View>
	            {item}
	          </View>
	        </TouchableWithoutFeedback>
	      );
	    });


		
		return (
			<View style = {[styles.scrollView, style]}>
				<ScrollView
					automaticallyAdjustContentInsets={false}
	          		bounces={false}
					>
				 {renderedItems}				
				</ScrollView>
			</View>	
		);
	}

	
}


var styles = StyleSheet.create({
	scrollView : {
		height : Dimensions.get('window').height*(2/3),
		width  : Dimensions.get('window').width*(2/3),
		borderWidth : 1,
	}
});


OptionList.propTypes = {
	style: View.propTypes.style,
 	onSelect : React.PropTypes.func
}

OptionList.defaultProps = {
  onSelect: () => {}
}

export default OptionList;

