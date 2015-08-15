/**
 * Notes controller for basic keynote like presentation.
 * Used in Angular.js Advanced Design Patterns and Best Practices
 *
 * Use of Class.js
 *
 * @author tommy.rochette[followed by the usual sign]universalmind.com
 */

var SlideController = BaseController.extend({

    _notesModel :null, 

    /**
     * Initialize Notes Controller
     * @param $scope, current controller scope
     */  
	init:function(scope, NotesModel){
        this._notesModel = NotesModel;
		this._super(scope);
	},

    /**
     *@Override
     */ 
    defineListeners:function(){
        this._super();
        console.log("fds");
        document.body.style.backgroundImage = "url("+this._notesModel.getCurrentSlide().background+")";
    },

    // _handleSlideTransition: function() {
    //     console.log("fdsf");
    // },

	/**
     * Use this function to define all scope objects.
     * Give a way to instantaly view whats available
     * publicly on the scope.
     */ 
	defineScope:function(){
		//Useless... for demo purpose
		this.$scope.instance="SlideController";
	}
})


SlideController.$inject = ['$scope','NotesModel'];