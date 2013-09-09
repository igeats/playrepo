function RestaurantController($scope){
    $scope.restaurants=[
	{
	 name : 'Papa John\'s Pizza',
	 stars: 3,
	 types:'American, Breakfast, Salad, Mexican',
	 delivery: '$2.50',
	 min: '$15.50',
	 distance: '.25miles 45-60mins',
	 image: './images/icon_instagram.png'
	},
	{
	 name : 'New York Pizza',
	 stars: 3,
	 types:'American, Breakfast, Itallian',
	 delivery: '$5.50',
	 min: '$10.50',
	 distance: '.3 miles 45-60mins',
	 image: './images/icon_instagram.png'
	}
    ];
}
