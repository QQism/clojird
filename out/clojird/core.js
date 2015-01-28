// Compiled by ClojureScript 0.0-2311
goog.provide('clojird.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"This is Clojird Game.");
clojird.core.indices = (function indices(pred,coll){return cljs.core.keep_indexed.call(null,(function (p1__6840_SHARP_,p2__6839_SHARP_){if(cljs.core.truth_(pred.call(null,p2__6839_SHARP_)))
{return p1__6840_SHARP_;
} else
{return null;
}
}),coll);
});
clojird.core.assets_loaded_count = cljs.core.atom.call(null,(0));
clojird.core.assets_count = cljs.core.atom.call(null,(0));
clojird.core.read_image = (function read_image(url){var image = (new Image());cljs.core.swap_BANG_.call(null,clojird.core.assets_count,((function (image){
return (function (p1__6841_SHARP_){return (p1__6841_SHARP_ + (1));
});})(image))
);
image.src = url;
image.onload = ((function (image){
return (function (e){return cljs.core.swap_BANG_.call(null,clojird.core.assets_loaded_count,((function (image){
return (function (p1__6842_SHARP_){return (p1__6842_SHARP_ + (1));
});})(image))
);
});})(image))
;
return image;
});
clojird.core.assets = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"land-sprite","land-sprite",622640884),clojird.core.read_image.call(null,"resources/land.png"),new cljs.core.Keyword(null,"pipe-down-sprite","pipe-down-sprite",-1841379380),clojird.core.read_image.call(null,"resources/PipeDown.png"),new cljs.core.Keyword(null,"pipe-up-sprite","pipe-up-sprite",1435174784),clojird.core.read_image.call(null,"resources/PipeUp.png"),new cljs.core.Keyword(null,"sky-sprite","sky-sprite",-1672646266),clojird.core.read_image.call(null,"resources/sky.png"),new cljs.core.Keyword(null,"bird-sprites","bird-sprites",659491271),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojird.core.read_image.call(null,"resources/bird/bird-01.png"),clojird.core.read_image.call(null,"resources/bird/bird-02.png"),clojird.core.read_image.call(null,"resources/bird/bird-03.png"),clojird.core.read_image.call(null,"resources/bird/bird-04.png")], null),new cljs.core.Keyword(null,"play-button","play-button",-1699737024),clojird.core.read_image.call(null,"resources/play-button.png")], null);
clojird.core.game_settings = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pipe-margin-y","pipe-margin-y",-845973504),new cljs.core.Keyword(null,"assets","assets",210278279),new cljs.core.Keyword(null,"dt","dt",-368444759),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"gravity","gravity",-1815198225),new cljs.core.Keyword(null,"resolution","resolution",-756075601),new cljs.core.Keyword(null,"fps","fps",683533296),new cljs.core.Keyword(null,"map-speed","map-speed",-1682184171),new cljs.core.Keyword(null,"pause","pause",-2095325672),new cljs.core.Keyword(null,"pipe-margin-x","pipe-margin-x",-251539784),new cljs.core.Keyword(null,"last-timestamp","last-timestamp",-2019388584)],[(250),clojird.core.assets,(0),false,3.9E-4,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(550),new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),(60),(150),true,(160),(0)]));
clojird.core.game_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"land","land",-1402569867),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"land-sprite","land-sprite",622640884).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"assets","assets",210278279).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clojird.core.game_settings))),new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"velocity","velocity",-581524355),(1),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(70)], null),new cljs.core.Keyword(null,"sky","sky",1271496862),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"sprite","sprite",172516848),new cljs.core.Keyword(null,"sky-sprite","sky-sprite",-1672646266).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"assets","assets",210278279).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clojird.core.game_settings))),new cljs.core.Keyword(null,"offset","offset",296498311),(0),new cljs.core.Keyword(null,"velocity","velocity",-581524355),0.8,new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(178)], null),new cljs.core.Keyword(null,"bird","bird",-1252014845),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"sprite","sprite",172516848),cljs.core.first.call(null,new cljs.core.Keyword(null,"bird-sprites","bird-sprites",659491271).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"assets","assets",210278279).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clojird.core.game_settings)))),new cljs.core.Keyword(null,"last-flipping-time","last-flipping-time",1738352581),(0),new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(100),new cljs.core.Keyword(null,"y-velocity","y-velocity",726533740),(0)], null),new cljs.core.Keyword(null,"score","score",-1963588780),(0),new cljs.core.Keyword(null,"background-color","background-color",570434026),"#60B2BC",new cljs.core.Keyword(null,"next-state","next-state",-1428728252),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"prev-state","prev-state",-275279009),cljs.core.atom.call(null,null)], null));
clojird.core.draw_image = (function draw_image(context,sprite,x,y){context.drawImage(sprite,x,y);
if(cljs.core.truth_(new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clojird.core.game_settings))))
{return context.strokeRect(x,y,sprite.width,sprite.height);
} else
{return null;
}
});
clojird.core.draw_rotated_image = (function draw_rotated_image(context,sprite,x,y,angle){context.save();
context.translate(x,y);
context.rotate((angle * (Math.PI / (180))));
clojird.core.draw_image.call(null,context,sprite,(sprite.width / (-2)),(sprite.height / (-2)));
return context.restore();
});
clojird.core.clear_canvas = (function clear_canvas(context,width,height){return context.clearRect((0),(0),width,height);
});
clojird.core.draw_parallax = (function draw_parallax(context,state,settings,parallax){var map__6847 = state;var map__6847__$1 = ((cljs.core.seq_QMARK_.call(null,map__6847))?cljs.core.apply.call(null,cljs.core.hash_map,map__6847):map__6847);var map__6848 = cljs.core.get.call(null,map__6847__$1,parallax);var map__6848__$1 = ((cljs.core.seq_QMARK_.call(null,map__6848))?cljs.core.apply.call(null,cljs.core.hash_map,map__6848):map__6848);var sprite = cljs.core.get.call(null,map__6848__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));var offset = cljs.core.get.call(null,map__6848__$1,new cljs.core.Keyword(null,"offset","offset",296498311));var sprite_x = cljs.core.get.call(null,map__6848__$1,new cljs.core.Keyword(null,"x","x",2099068185));var sprite_y = cljs.core.get.call(null,map__6848__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var map__6849 = settings;var map__6849__$1 = ((cljs.core.seq_QMARK_.call(null,map__6849))?cljs.core.apply.call(null,cljs.core.hash_map,map__6849):map__6849);var map__6850 = cljs.core.get.call(null,map__6849__$1,new cljs.core.Keyword(null,"resolution","resolution",-756075601));var map__6850__$1 = ((cljs.core.seq_QMARK_.call(null,map__6850))?cljs.core.apply.call(null,cljs.core.hash_map,map__6850):map__6850);var canvas_width = cljs.core.get.call(null,map__6850__$1,new cljs.core.Keyword(null,"width","width",-384071477));var canvas_height = cljs.core.get.call(null,map__6850__$1,new cljs.core.Keyword(null,"height","height",1025178622));var x = sprite_x;var y = (canvas_height - sprite_y);return clojird.core.draw_recur_parallax.call(null,context,sprite,offset,x,y,canvas_width);
});
clojird.core.draw_background = (function draw_background(context,state,settings){var map__6854 = state;var map__6854__$1 = ((cljs.core.seq_QMARK_.call(null,map__6854))?cljs.core.apply.call(null,cljs.core.hash_map,map__6854):map__6854);var color = cljs.core.get.call(null,map__6854__$1,new cljs.core.Keyword(null,"background-color","background-color",570434026));var map__6855 = settings;var map__6855__$1 = ((cljs.core.seq_QMARK_.call(null,map__6855))?cljs.core.apply.call(null,cljs.core.hash_map,map__6855):map__6855);var map__6856 = cljs.core.get.call(null,map__6855__$1,new cljs.core.Keyword(null,"resolution","resolution",-756075601));var map__6856__$1 = ((cljs.core.seq_QMARK_.call(null,map__6856))?cljs.core.apply.call(null,cljs.core.hash_map,map__6856):map__6856);var canvas_width = cljs.core.get.call(null,map__6856__$1,new cljs.core.Keyword(null,"width","width",-384071477));var canvas_height = cljs.core.get.call(null,map__6856__$1,new cljs.core.Keyword(null,"height","height",1025178622));context.fillStyle = color;
return context.fillRect((0),(0),canvas_width,canvas_height);
});
clojird.core.draw_recur_parallax = (function draw_recur_parallax(context,sprite,offset,x,y,canvas_width){context.save();
context.translate(((0) - offset),(0));
(function (x__$1){while(true){
clojird.core.draw_image.call(null,context,sprite,x__$1,y);
if((((x__$1 - offset) <= sprite.width)) && ((sprite.width > (0))))
{{
var G__6857 = (x__$1 + sprite.width);
x__$1 = G__6857;
continue;
}
} else
{return null;
}
break;
}
}).call(null,x);
return context.restore();
});
clojird.core.draw_pipes = (function draw_pipes(context,state,settings){var seq__6864 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"pipes","pipes",-2098535323).cljs$core$IFn$_invoke$arity$1(state));var chunk__6865 = null;var count__6866 = (0);var i__6867 = (0);while(true){
if((i__6867 < count__6866))
{var pipe = cljs.core._nth.call(null,chunk__6865,i__6867);var map__6868_6870 = pipe;var map__6868_6871__$1 = ((cljs.core.seq_QMARK_.call(null,map__6868_6870))?cljs.core.apply.call(null,cljs.core.hash_map,map__6868_6870):map__6868_6870);var sprite_6872 = cljs.core.get.call(null,map__6868_6871__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));var x_6873 = cljs.core.get.call(null,map__6868_6871__$1,new cljs.core.Keyword(null,"x","x",2099068185));var y_6874 = cljs.core.get.call(null,map__6868_6871__$1,new cljs.core.Keyword(null,"y","y",-1757859776));clojird.core.draw_image.call(null,context,sprite_6872,x_6873,y_6874);
{
var G__6875 = seq__6864;
var G__6876 = chunk__6865;
var G__6877 = count__6866;
var G__6878 = (i__6867 + (1));
seq__6864 = G__6875;
chunk__6865 = G__6876;
count__6866 = G__6877;
i__6867 = G__6878;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6864);if(temp__4126__auto__)
{var seq__6864__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6864__$1))
{var c__4317__auto__ = cljs.core.chunk_first.call(null,seq__6864__$1);{
var G__6879 = cljs.core.chunk_rest.call(null,seq__6864__$1);
var G__6880 = c__4317__auto__;
var G__6881 = cljs.core.count.call(null,c__4317__auto__);
var G__6882 = (0);
seq__6864 = G__6879;
chunk__6865 = G__6880;
count__6866 = G__6881;
i__6867 = G__6882;
continue;
}
} else
{var pipe = cljs.core.first.call(null,seq__6864__$1);var map__6869_6883 = pipe;var map__6869_6884__$1 = ((cljs.core.seq_QMARK_.call(null,map__6869_6883))?cljs.core.apply.call(null,cljs.core.hash_map,map__6869_6883):map__6869_6883);var sprite_6885 = cljs.core.get.call(null,map__6869_6884__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));var x_6886 = cljs.core.get.call(null,map__6869_6884__$1,new cljs.core.Keyword(null,"x","x",2099068185));var y_6887 = cljs.core.get.call(null,map__6869_6884__$1,new cljs.core.Keyword(null,"y","y",-1757859776));clojird.core.draw_image.call(null,context,sprite_6885,x_6886,y_6887);
{
var G__6888 = cljs.core.next.call(null,seq__6864__$1);
var G__6889 = null;
var G__6890 = (0);
var G__6891 = (0);
seq__6864 = G__6888;
chunk__6865 = G__6889;
count__6866 = G__6890;
i__6867 = G__6891;
continue;
}
}
} else
{return null;
}
}
break;
}
});
clojird.core.draw_bird = (function draw_bird(context,state,settings){var map__6894 = state;var map__6894__$1 = ((cljs.core.seq_QMARK_.call(null,map__6894))?cljs.core.apply.call(null,cljs.core.hash_map,map__6894):map__6894);var map__6895 = cljs.core.get.call(null,map__6894__$1,new cljs.core.Keyword(null,"bird","bird",-1252014845));var map__6895__$1 = ((cljs.core.seq_QMARK_.call(null,map__6895))?cljs.core.apply.call(null,cljs.core.hash_map,map__6895):map__6895);var sprite = cljs.core.get.call(null,map__6895__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));var x = cljs.core.get.call(null,map__6895__$1,new cljs.core.Keyword(null,"x","x",2099068185));var y = cljs.core.get.call(null,map__6895__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var velocity = cljs.core.get.call(null,map__6895__$1,new cljs.core.Keyword(null,"y-velocity","y-velocity",726533740));var angle = clojird.core.velocity_to_angle.call(null,velocity);return clojird.core.draw_rotated_image.call(null,context,sprite,x,y,angle);
});
clojird.core.draw_score = (function draw_score(context,state,p__6896){var map__6899 = p__6896;var map__6899__$1 = ((cljs.core.seq_QMARK_.call(null,map__6899))?cljs.core.apply.call(null,cljs.core.hash_map,map__6899):map__6899);var map__6900 = cljs.core.get.call(null,map__6899__$1,new cljs.core.Keyword(null,"resolution","resolution",-756075601));var map__6900__$1 = ((cljs.core.seq_QMARK_.call(null,map__6900))?cljs.core.apply.call(null,cljs.core.hash_map,map__6900):map__6900);var width = cljs.core.get.call(null,map__6900__$1,new cljs.core.Keyword(null,"width","width",-384071477));var height = cljs.core.get.call(null,map__6900__$1,new cljs.core.Keyword(null,"height","height",1025178622));context.font = "23pt Comic Sans MS";
context.fillStyle = "#FFFFFF";
return context.fillText((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(state))),(width / (2)),(50));
});
clojird.core.draw_pause_screen = (function draw_pause_screen(context,state,p__6901){var map__6905 = p__6901;var map__6905__$1 = ((cljs.core.seq_QMARK_.call(null,map__6905))?cljs.core.apply.call(null,cljs.core.hash_map,map__6905):map__6905);var map__6906 = cljs.core.get.call(null,map__6905__$1,new cljs.core.Keyword(null,"resolution","resolution",-756075601));var map__6906__$1 = ((cljs.core.seq_QMARK_.call(null,map__6906))?cljs.core.apply.call(null,cljs.core.hash_map,map__6906):map__6906);var width = cljs.core.get.call(null,map__6906__$1,new cljs.core.Keyword(null,"width","width",-384071477));var height = cljs.core.get.call(null,map__6906__$1,new cljs.core.Keyword(null,"height","height",1025178622));var map__6907 = cljs.core.get.call(null,map__6905__$1,new cljs.core.Keyword(null,"assets","assets",210278279));var map__6907__$1 = ((cljs.core.seq_QMARK_.call(null,map__6907))?cljs.core.apply.call(null,cljs.core.hash_map,map__6907):map__6907);var play_button = cljs.core.get.call(null,map__6907__$1,new cljs.core.Keyword(null,"play-button","play-button",-1699737024));context.fillStyle = "rgba(0, 0, 0, 0.5)";
context.fillRect((0),(0),width,height);
context.font = "10pt Comic Sans MS";
context.fillStyle = "#FFFFFF";
context.fillText("'z' time backward",(width / (7)),(height * 0.82));
context.fillText("'x' time forward",(width / (7)),(height * 0.89));
context.fillText("'Enter' Play/Pause/Resume",(width / (2)),(height * 0.82));
return context.fillText("'Space' Jump",(width / (2)),(height * 0.89));
});
clojird.core.draw_game = (function draw_game(dt,context,state,settings){var map__6910 = settings;var map__6910__$1 = ((cljs.core.seq_QMARK_.call(null,map__6910))?cljs.core.apply.call(null,cljs.core.hash_map,map__6910):map__6910);var map__6911 = cljs.core.get.call(null,map__6910__$1,new cljs.core.Keyword(null,"resolution","resolution",-756075601));var map__6911__$1 = ((cljs.core.seq_QMARK_.call(null,map__6911))?cljs.core.apply.call(null,cljs.core.hash_map,map__6911):map__6911);var canvas_width = cljs.core.get.call(null,map__6911__$1,new cljs.core.Keyword(null,"width","width",-384071477));var canvas_height = cljs.core.get.call(null,map__6911__$1,new cljs.core.Keyword(null,"height","height",1025178622));var pause = cljs.core.get.call(null,map__6910__$1,new cljs.core.Keyword(null,"pause","pause",-2095325672));clojird.core.clear_canvas.call(null,context,canvas_width,canvas_height);
clojird.core.draw_background.call(null,context,state,settings);
clojird.core.draw_parallax.call(null,context,state,settings,new cljs.core.Keyword(null,"sky","sky",1271496862));
clojird.core.draw_pipes.call(null,context,state,settings);
clojird.core.draw_parallax.call(null,context,state,settings,new cljs.core.Keyword(null,"land","land",-1402569867));
if(cljs.core.truth_(pause))
{clojird.core.draw_pause_screen.call(null,context,state,settings);
} else
{}
clojird.core.draw_bird.call(null,context,state,settings);
return clojird.core.draw_score.call(null,context,state,settings);
});
clojird.core.velocity_to_angle = (function velocity_to_angle(velocity){var max_velocity = 0.25;var max_angle = (90);var min_angle = (-30);if((velocity <= clojird.core.min_velocity))
{return min_angle;
} else
{if((velocity >= max_velocity))
{return max_angle;
} else
{if((velocity > (0)))
{return ((velocity * max_angle) / max_velocity);
} else
{return min_angle;

}
}
}
});
clojird.core.key_press = (function key_press(event,state,settings){var G__6913 = event.which;switch (G__6913) {
case (13):
return clojird.core.toogle_game_pause.call(null,state,settings);

break;
case (122):
return clojird.core.shift_history.call(null,state,new cljs.core.Keyword(null,"prev-state","prev-state",-275279009));

break;
case (120):
return clojird.core.shift_history.call(null,state,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));

break;
case (32):
return clojird.core.touch.call(null,null,state,settings);

break;
default:
return null;

}
});
clojird.core.toogle_game_pause = (function toogle_game_pause(state,settings){return cljs.core.swap_BANG_.call(null,settings,(function (p1__6915_SHARP_){return cljs.core.assoc.call(null,p1__6915_SHARP_,new cljs.core.Keyword(null,"pause","pause",-2095325672),cljs.core.not.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672).cljs$core$IFn$_invoke$arity$1(p1__6915_SHARP_)));
}));
});
clojird.core.shift_history = (function shift_history(state,action){var temp__4124__auto__ = cljs.core.deref.call(null,action.call(null,cljs.core.deref.call(null,state)));if(cljs.core.truth_(temp__4124__auto__))
{var target_state = temp__4124__auto__;return cljs.core.reset_BANG_.call(null,state,target_state);
} else
{return null;
}
});
clojird.core.update_parallax = (function update_parallax(state,settings,parallax){var map__6920 = settings;var map__6920__$1 = ((cljs.core.seq_QMARK_.call(null,map__6920))?cljs.core.apply.call(null,cljs.core.hash_map,map__6920):map__6920);var map__6921 = cljs.core.get.call(null,map__6920__$1,new cljs.core.Keyword(null,"resolution","resolution",-756075601));var map__6921__$1 = ((cljs.core.seq_QMARK_.call(null,map__6921))?cljs.core.apply.call(null,cljs.core.hash_map,map__6921):map__6921);var canvas_width = cljs.core.get.call(null,map__6921__$1,new cljs.core.Keyword(null,"width","width",-384071477));var canvas_height = cljs.core.get.call(null,map__6921__$1,new cljs.core.Keyword(null,"height","height",1025178622));var fps = cljs.core.get.call(null,map__6920__$1,new cljs.core.Keyword(null,"fps","fps",683533296));var map_speed = cljs.core.get.call(null,map__6920__$1,new cljs.core.Keyword(null,"map-speed","map-speed",-1682184171));var map__6922 = state;var map__6922__$1 = ((cljs.core.seq_QMARK_.call(null,map__6922))?cljs.core.apply.call(null,cljs.core.hash_map,map__6922):map__6922);var map__6923 = cljs.core.get.call(null,map__6922__$1,parallax);var map__6923__$1 = ((cljs.core.seq_QMARK_.call(null,map__6923))?cljs.core.apply.call(null,cljs.core.hash_map,map__6923):map__6923);var velocity = cljs.core.get.call(null,map__6923__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));var sprite = cljs.core.get.call(null,map__6923__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parallax,new cljs.core.Keyword(null,"offset","offset",296498311)], null),((function (map__6920,map__6920__$1,map__6921,map__6921__$1,canvas_width,canvas_height,fps,map_speed,map__6922,map__6922__$1,map__6923,map__6923__$1,velocity,sprite){
return (function (offset){if((offset <= sprite.width))
{return (offset + ((velocity * map_speed) / fps));
} else
{return (0);

}
});})(map__6920,map__6920__$1,map__6921,map__6921__$1,canvas_width,canvas_height,fps,map_speed,map__6922,map__6922__$1,map__6923,map__6923__$1,velocity,sprite))
);
});
clojird.core.save_history = (function save_history(state,old_state_value){var old_state = cljs.core.atom.call(null,old_state_value);var prev_old_state = new cljs.core.Keyword(null,"prev-state","prev-state",-275279009).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,old_state));cljs.core.swap_BANG_.call(null,state,((function (old_state,prev_old_state){
return (function (p1__6924_SHARP_){return cljs.core.assoc.call(null,p1__6924_SHARP_,new cljs.core.Keyword(null,"next-state","next-state",-1428728252),cljs.core.atom.call(null,null));
});})(old_state,prev_old_state))
);
cljs.core.swap_BANG_.call(null,state,((function (old_state,prev_old_state){
return (function (p1__6925_SHARP_){return cljs.core.assoc.call(null,p1__6925_SHARP_,new cljs.core.Keyword(null,"prev-state","prev-state",-275279009),old_state);
});})(old_state,prev_old_state))
);
cljs.core.swap_BANG_.call(null,old_state,((function (old_state,prev_old_state){
return (function (p1__6926_SHARP_){return cljs.core.assoc.call(null,p1__6926_SHARP_,new cljs.core.Keyword(null,"next-state","next-state",-1428728252),cljs.core.atom.call(null,cljs.core.deref.call(null,state)));
});})(old_state,prev_old_state))
);
if(cljs.core.truth_(cljs.core.deref.call(null,prev_old_state)))
{return cljs.core.swap_BANG_.call(null,prev_old_state,((function (old_state,prev_old_state){
return (function (p1__6927_SHARP_){return cljs.core.assoc.call(null,p1__6927_SHARP_,new cljs.core.Keyword(null,"next-state","next-state",-1428728252),old_state);
});})(old_state,prev_old_state))
);
} else
{return null;
}
});
clojird.core.furthest_pipe_x = (function furthest_pipe_x(pipes){return cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__6928_SHARP_){return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__6928_SHARP_);
}),pipes));
});
clojird.core.pipe_position_state = (function pipe_position_state(pipe,settings){var map__6932 = pipe;var map__6932__$1 = ((cljs.core.seq_QMARK_.call(null,map__6932))?cljs.core.apply.call(null,cljs.core.hash_map,map__6932):map__6932);var sprite = cljs.core.get.call(null,map__6932__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));var x = cljs.core.get.call(null,map__6932__$1,new cljs.core.Keyword(null,"x","x",2099068185));var y = cljs.core.get.call(null,map__6932__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var map__6933 = settings;var map__6933__$1 = ((cljs.core.seq_QMARK_.call(null,map__6933))?cljs.core.apply.call(null,cljs.core.hash_map,map__6933):map__6933);var map__6934 = cljs.core.get.call(null,map__6933__$1,new cljs.core.Keyword(null,"resolution","resolution",-756075601));var map__6934__$1 = ((cljs.core.seq_QMARK_.call(null,map__6934))?cljs.core.apply.call(null,cljs.core.hash_map,map__6934):map__6934);var canvas_width = cljs.core.get.call(null,map__6934__$1,new cljs.core.Keyword(null,"width","width",-384071477));var canvas_height = cljs.core.get.call(null,map__6934__$1,new cljs.core.Keyword(null,"height","height",1025178622));var width = sprite.width;if(((x + sprite.width) < (0)))
{return new cljs.core.Keyword(null,"left-offscreen","left-offscreen",23229339);
} else
{if((x > canvas_width))
{return new cljs.core.Keyword(null,"right-offscreen","right-offscreen",-1840123567);
} else
{return new cljs.core.Keyword(null,"onscreen","onscreen",2124501358);

}
}
});
clojird.core.pipe_up_at = (function pipe_up_at(x,pipes){return cljs.core.get.call(null,pipes,cljs.core.first.call(null,clojird.core.indices.call(null,(function (p1__6935_SHARP_){return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__6935_SHARP_),x)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(p1__6935_SHARP_),new cljs.core.Keyword(null,"pipe-up","pipe-up",-429194408)));
}),pipes)));
});
clojird.core.new_pipe_down_y = (function new_pipe_down_y(pipe_down,pipes,settings){var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pipe_down);var pipe_up = clojird.core.pipe_up_at.call(null,x,pipes);var up_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pipe_up);var map__6937 = settings;var map__6937__$1 = ((cljs.core.seq_QMARK_.call(null,map__6937))?cljs.core.apply.call(null,cljs.core.hash_map,map__6937):map__6937);var margin_y = cljs.core.get.call(null,map__6937__$1,new cljs.core.Keyword(null,"pipe-margin-y","pipe-margin-y",-845973504));return (up_y - margin_y);
});
clojird.core.new_pipe_x = (function new_pipe_x(pipe,pipes,settings){var map__6940 = pipe;var map__6940__$1 = ((cljs.core.seq_QMARK_.call(null,map__6940))?cljs.core.apply.call(null,cljs.core.hash_map,map__6940):map__6940);var sprite = cljs.core.get.call(null,map__6940__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));var x = cljs.core.get.call(null,map__6940__$1,new cljs.core.Keyword(null,"x","x",2099068185));var map__6941 = settings;var map__6941__$1 = ((cljs.core.seq_QMARK_.call(null,map__6941))?cljs.core.apply.call(null,cljs.core.hash_map,map__6941):map__6941);var speed = cljs.core.get.call(null,map__6941__$1,new cljs.core.Keyword(null,"map-speed","map-speed",-1682184171));var fps = cljs.core.get.call(null,map__6941__$1,new cljs.core.Keyword(null,"fps","fps",683533296));var margin_x = cljs.core.get.call(null,map__6941__$1,new cljs.core.Keyword(null,"pipe-margin-x","pipe-margin-x",-251539784));if(cljs.core._EQ_.call(null,clojird.core.pipe_position_state.call(null,pipe,settings),new cljs.core.Keyword(null,"left-offscreen","left-offscreen",23229339)))
{return (clojird.core.furthest_pipe_x.call(null,pipes) + margin_x);
} else
{return (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pipe) - (speed / fps));
}
});
clojird.core.new_pipe_y = (function new_pipe_y(pipe,pipes,settings){var map__6943 = pipe;var map__6943__$1 = ((cljs.core.seq_QMARK_.call(null,map__6943))?cljs.core.apply.call(null,cljs.core.hash_map,map__6943):map__6943);var sprite = cljs.core.get.call(null,map__6943__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));var x = cljs.core.get.call(null,map__6943__$1,new cljs.core.Keyword(null,"x","x",2099068185));var y = cljs.core.get.call(null,map__6943__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var pipe_position_state = clojird.core.pipe_position_state.call(null,pipe,settings);var is_pipe_up = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(pipe),new cljs.core.Keyword(null,"pipe-up","pipe-up",-429194408));if((cljs.core._EQ_.call(null,pipe_position_state,new cljs.core.Keyword(null,"left-offscreen","left-offscreen",23229339))) && (is_pipe_up))
{return clojird.core.random_pipe_up_y.call(null);
} else
{if((cljs.core._EQ_.call(null,pipe_position_state,new cljs.core.Keyword(null,"right-offscreen","right-offscreen",-1840123567))) && (!(is_pipe_up)))
{return clojird.core.new_pipe_down_y.call(null,pipe,pipes,settings);
} else
{return y;

}
}
});
clojird.core.update_pipes = (function update_pipes(state,settings){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pipes","pipes",-2098535323)], null),(function (pipes){return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__6944_SHARP_){var new_x = clojird.core.new_pipe_x.call(null,p1__6944_SHARP_,pipes,settings);var new_y = clojird.core.new_pipe_y.call(null,p1__6944_SHARP_,pipes,settings);var bird_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bird","bird",-1252014845).cljs$core$IFn$_invoke$arity$1(state));var next_status = clojird.core.next_pipe_status.call(null,p1__6944_SHARP_,bird_x);return cljs.core.assoc.call(null,p1__6944_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185),new_x,new cljs.core.Keyword(null,"y","y",-1757859776),new_y,new cljs.core.Keyword(null,"status","status",-1997798413),next_status);
}),pipes));
}));
});
clojird.core.next_pipe_status = (function next_pipe_status(p__6945,bird_x){var map__6947 = p__6945;var map__6947__$1 = ((cljs.core.seq_QMARK_.call(null,map__6947))?cljs.core.apply.call(null,cljs.core.hash_map,map__6947):map__6947);var pipe = map__6947__$1;var sprite = cljs.core.get.call(null,map__6947__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));var status = cljs.core.get.call(null,map__6947__$1,new cljs.core.Keyword(null,"status","status",-1997798413));var x = cljs.core.get.call(null,map__6947__$1,new cljs.core.Keyword(null,"x","x",2099068185));var edge_x = (x + sprite.width);if(((edge_x < bird_x)) && (cljs.core._EQ_.call(null,status,new cljs.core.Keyword(null,"passing","passing",154799600))))
{return new cljs.core.Keyword(null,"backward","backward",554036364);
} else
{if(((edge_x < bird_x)) && (cljs.core._EQ_.call(null,status,new cljs.core.Keyword(null,"forward","forward",-557345303))))
{return new cljs.core.Keyword(null,"passing","passing",154799600);
} else
{if(((edge_x > bird_x)) && (cljs.core._EQ_.call(null,status,new cljs.core.Keyword(null,"backward","backward",554036364))))
{return new cljs.core.Keyword(null,"forward","forward",-557345303);
} else
{return status;

}
}
}
});
clojird.core.next_bird_sprite = (function next_bird_sprite(bird,settings){var map__6952 = settings;var map__6952__$1 = ((cljs.core.seq_QMARK_.call(null,map__6952))?cljs.core.apply.call(null,cljs.core.hash_map,map__6952):map__6952);var map__6953 = cljs.core.get.call(null,map__6952__$1,new cljs.core.Keyword(null,"assets","assets",210278279));var map__6953__$1 = ((cljs.core.seq_QMARK_.call(null,map__6953))?cljs.core.apply.call(null,cljs.core.hash_map,map__6953):map__6953);var sprites = cljs.core.get.call(null,map__6953__$1,new cljs.core.Keyword(null,"bird-sprites","bird-sprites",659491271));var map__6954 = bird;var map__6954__$1 = ((cljs.core.seq_QMARK_.call(null,map__6954))?cljs.core.apply.call(null,cljs.core.hash_map,map__6954):map__6954);var sprite = cljs.core.get.call(null,map__6954__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));var x = cljs.core.get.call(null,map__6954__$1,new cljs.core.Keyword(null,"x","x",2099068185));var y = cljs.core.get.call(null,map__6954__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var current_sprite_index = cljs.core.first.call(null,clojird.core.indices.call(null,((function (map__6952,map__6952__$1,map__6953,map__6953__$1,sprites,map__6954,map__6954__$1,sprite,x,y){
return (function (p1__6948_SHARP_){return cljs.core._EQ_.call(null,p1__6948_SHARP_,sprite);
});})(map__6952,map__6952__$1,map__6953,map__6953__$1,sprites,map__6954,map__6954__$1,sprite,x,y))
,sprites));var tmp_index = (current_sprite_index + (1));var next_sprite_index = ((cljs.core._EQ_.call(null,tmp_index,cljs.core.count.call(null,sprites)))?(0):tmp_index);return cljs.core.get.call(null,sprites,next_sprite_index);
});
clojird.core.bird_flipping = (function bird_flipping(bird,settings,dt){var map__6957 = bird;var map__6957__$1 = ((cljs.core.seq_QMARK_.call(null,map__6957))?cljs.core.apply.call(null,cljs.core.hash_map,map__6957):map__6957);var last_flipping_time = cljs.core.get.call(null,map__6957__$1,new cljs.core.Keyword(null,"last-flipping-time","last-flipping-time",1738352581));var map__6958 = settings;var map__6958__$1 = ((cljs.core.seq_QMARK_.call(null,map__6958))?cljs.core.apply.call(null,cljs.core.hash_map,map__6958):map__6958);var last_timestamp = cljs.core.get.call(null,map__6958__$1,new cljs.core.Keyword(null,"last-timestamp","last-timestamp",-2019388584));if(((last_timestamp - last_flipping_time) > (200)))
{return cljs.core.assoc.call(null,bird,new cljs.core.Keyword(null,"sprite","sprite",172516848),clojird.core.next_bird_sprite.call(null,bird,settings),new cljs.core.Keyword(null,"last-flipping-time","last-flipping-time",1738352581),last_timestamp);
} else
{return bird;
}
});
clojird.core.bird_gravity = (function bird_gravity(bird,settings,dt){var map__6961 = bird;var map__6961__$1 = ((cljs.core.seq_QMARK_.call(null,map__6961))?cljs.core.apply.call(null,cljs.core.hash_map,map__6961):map__6961);var y = cljs.core.get.call(null,map__6961__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var velocity = cljs.core.get.call(null,map__6961__$1,new cljs.core.Keyword(null,"y-velocity","y-velocity",726533740));var map__6962 = settings;var map__6962__$1 = ((cljs.core.seq_QMARK_.call(null,map__6962))?cljs.core.apply.call(null,cljs.core.hash_map,map__6962):map__6962);var gravity = cljs.core.get.call(null,map__6962__$1,new cljs.core.Keyword(null,"gravity","gravity",-1815198225));if((y <= (210)))
{return cljs.core.assoc.call(null,bird,new cljs.core.Keyword(null,"y","y",-1757859776),((velocity * dt) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bird)),new cljs.core.Keyword(null,"y-velocity","y-velocity",726533740),(velocity + (gravity * dt)));
} else
{return bird;
}
});
clojird.core.update_bird_flipping = (function update_bird_flipping(state,settings,dt){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bird","bird",-1252014845)], null),clojird.core.bird_flipping,settings,dt);
});
clojird.core.update_bird_gravity = (function update_bird_gravity(state,settings,dt){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bird","bird",-1252014845)], null),clojird.core.bird_gravity,settings,dt);
});
clojird.core.update_bird_jump = (function update_bird_jump(state,settings,dt){return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bird","bird",-1252014845),new cljs.core.Keyword(null,"y-velocity","y-velocity",726533740)], null),-0.125);
});
clojird.core.bird_collisions = (function bird_collisions(settings,p__6963,dt){var map__6965 = p__6963;var map__6965__$1 = ((cljs.core.seq_QMARK_.call(null,map__6965))?cljs.core.apply.call(null,cljs.core.hash_map,map__6965):map__6965);var bird = cljs.core.get.call(null,map__6965__$1,new cljs.core.Keyword(null,"bird","bird",-1252014845));var pipes = cljs.core.get.call(null,map__6965__$1,new cljs.core.Keyword(null,"pipes","pipes",-2098535323));if(cljs.core.truth_(clojird.core.bird_hit_ground_QMARK_.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bird))))
{return cljs.core.assoc.call(null,settings,new cljs.core.Keyword(null,"pause","pause",-2095325672),true);
} else
{if(cljs.core.truth_(clojird.core.bird_hit_pipe_QMARK_.call(null,bird,pipes)))
{return cljs.core.assoc.call(null,settings,new cljs.core.Keyword(null,"pause","pause",-2095325672),true);
} else
{return settings;

}
}
});
clojird.core.bird_hit_ground_QMARK_ = (function bird_hit_ground_QMARK_(bird_y){return (bird_y > (210));
});
clojird.core.bird_hit_pipe_QMARK_ = (function bird_hit_pipe_QMARK_(bird,pipes){var bird_vertices = clojird.core.bird_rotated_vertices.call(null,bird);return !(cljs.core.not_any_QMARK_.call(null,((function (bird_vertices){
return (function (p1__6966_SHARP_){return p1__6966_SHARP_ === true;
});})(bird_vertices))
,cljs.core.map.call(null,((function (bird_vertices){
return (function (p1__6967_SHARP_){return clojird.core.is_polygons_intersecting_QMARK_.call(null,bird_vertices,clojird.core.pipe_vertices.call(null,p1__6967_SHARP_));
});})(bird_vertices))
,pipes)));
});
clojird.core.bird_rotated_vertices = (function bird_rotated_vertices(bird){var map__6970 = bird;var map__6970__$1 = ((cljs.core.seq_QMARK_.call(null,map__6970))?cljs.core.apply.call(null,cljs.core.hash_map,map__6970):map__6970);var sprite = cljs.core.get.call(null,map__6970__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));var x = cljs.core.get.call(null,map__6970__$1,new cljs.core.Keyword(null,"x","x",2099068185));var y = cljs.core.get.call(null,map__6970__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var velocity = cljs.core.get.call(null,map__6970__$1,new cljs.core.Keyword(null,"y-velocity","y-velocity",726533740));var rad_angle = (clojird.core.velocity_to_angle.call(null,velocity) * (Math.PI / (180)));var vertices = clojird.core.bird_vertices.call(null,bird);return cljs.core.map.call(null,((function (map__6970,map__6970__$1,sprite,x,y,velocity,rad_angle,vertices){
return (function (p1__6968_SHARP_){return clojird.core.convert_rotated_vertices.call(null,p1__6968_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),rad_angle);
});})(map__6970,map__6970__$1,sprite,x,y,velocity,rad_angle,vertices))
,vertices);
});
clojird.core.bird_vertices = (function bird_vertices(bird){var map__6972 = bird;var map__6972__$1 = ((cljs.core.seq_QMARK_.call(null,map__6972))?cljs.core.apply.call(null,cljs.core.hash_map,map__6972):map__6972);var sprite = cljs.core.get.call(null,map__6972__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));var x = cljs.core.get.call(null,map__6972__$1,new cljs.core.Keyword(null,"x","x",2099068185));var y = cljs.core.get.call(null,map__6972__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var width = sprite.width;var height = sprite.height;return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (width / (2))),(y - (height / (2)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (width / (2))),(y + (height / (2)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (width / (2))),(y - (height / (2)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (width / (2))),(y + (height / (2)))], null)], null);
});
clojird.core.pipe_vertices = (function pipe_vertices(pipe){var map__6974 = pipe;var map__6974__$1 = ((cljs.core.seq_QMARK_.call(null,map__6974))?cljs.core.apply.call(null,cljs.core.hash_map,map__6974):map__6974);var sprite = cljs.core.get.call(null,map__6974__$1,new cljs.core.Keyword(null,"sprite","sprite",172516848));var x = cljs.core.get.call(null,map__6974__$1,new cljs.core.Keyword(null,"x","x",2099068185));var y = cljs.core.get.call(null,map__6974__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var width = sprite.width;var height = sprite.height;return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + height)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + width),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + width),(y + height)], null)], null);
});
clojird.core.convert_rotated_vertices = (function convert_rotated_vertices(p__6975,p__6976,rad_angle){var vec__6979 = p__6975;var point_x = cljs.core.nth.call(null,vec__6979,(0),null);var point_y = cljs.core.nth.call(null,vec__6979,(1),null);var vec__6980 = p__6976;var pivot_x = cljs.core.nth.call(null,vec__6980,(0),null);var pivot_y = cljs.core.nth.call(null,vec__6980,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((point_x - pivot_x) * Math.cos(rad_angle)) - ((point_y - pivot_y) * Math.sin(rad_angle))) + pivot_x),((((point_x - pivot_x) * Math.sin(rad_angle)) + ((point_y - pivot_y) * Math.cos(rad_angle))) + pivot_y)], null);
});
clojird.core.bird_pass_pipe = (function bird_pass_pipe(state){var map__6984 = state;var map__6984__$1 = ((cljs.core.seq_QMARK_.call(null,map__6984))?cljs.core.apply.call(null,cljs.core.hash_map,map__6984):map__6984);var map__6985 = cljs.core.get.call(null,map__6984__$1,new cljs.core.Keyword(null,"bird","bird",-1252014845));var map__6985__$1 = ((cljs.core.seq_QMARK_.call(null,map__6985))?cljs.core.apply.call(null,cljs.core.hash_map,map__6985):map__6985);var bird_y = cljs.core.get.call(null,map__6985__$1,new cljs.core.Keyword(null,"y","y",-1757859776));var pipes = cljs.core.get.call(null,map__6984__$1,new cljs.core.Keyword(null,"pipes","pipes",-2098535323));return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780)], null),((function (map__6984,map__6984__$1,map__6985,map__6985__$1,bird_y,pipes){
return (function (score){return (score + (cljs.core.count.call(null,cljs.core.filter.call(null,((function (map__6984,map__6984__$1,map__6985,map__6985__$1,bird_y,pipes){
return (function (p1__6981_SHARP_){return cljs.core._EQ_.call(null,p1__6981_SHARP_,new cljs.core.Keyword(null,"passing","passing",154799600));
});})(map__6984,map__6984__$1,map__6985,map__6985__$1,bird_y,pipes))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"status","status",-1997798413),pipes))) / (2)));
});})(map__6984,map__6984__$1,map__6985,map__6985__$1,bird_y,pipes))
);
});
clojird.core.is_polygons_intersecting_QMARK_ = (function is_polygons_intersecting_QMARK_(a_vertices,b_vertices){var vertices = cljs.core.distinct.call(null,cljs.core.into.call(null,a_vertices,b_vertices));var a_normals = clojird.core.calculate_polygon_normals.call(null,a_vertices);var b_normals = clojird.core.calculate_polygon_normals.call(null,b_vertices);var a_a_projections = cljs.core.map.call(null,((function (vertices,a_normals,b_normals){
return (function (p1__6986_SHARP_){return clojird.core.polygon_projection_on_normal.call(null,a_vertices,p1__6986_SHARP_);
});})(vertices,a_normals,b_normals))
,a_normals);var b_a_projections = cljs.core.map.call(null,((function (vertices,a_normals,b_normals,a_a_projections){
return (function (p1__6987_SHARP_){return clojird.core.polygon_projection_on_normal.call(null,b_vertices,p1__6987_SHARP_);
});})(vertices,a_normals,b_normals,a_a_projections))
,a_normals);var a_b_projections = cljs.core.map.call(null,((function (vertices,a_normals,b_normals,a_a_projections,b_a_projections){
return (function (p1__6988_SHARP_){return clojird.core.polygon_projection_on_normal.call(null,a_vertices,p1__6988_SHARP_);
});})(vertices,a_normals,b_normals,a_a_projections,b_a_projections))
,b_normals);var b_b_projections = cljs.core.map.call(null,((function (vertices,a_normals,b_normals,a_a_projections,b_a_projections,a_b_projections){
return (function (p1__6989_SHARP_){return clojird.core.polygon_projection_on_normal.call(null,b_vertices,p1__6989_SHARP_);
});})(vertices,a_normals,b_normals,a_a_projections,b_a_projections,a_b_projections))
,b_normals);var a_projections = cljs.core.map.call(null,cljs.core.vector,a_a_projections,b_a_projections);var b_projections = cljs.core.map.call(null,cljs.core.vector,a_b_projections,b_b_projections);var a_overlaps = cljs.core.map.call(null,((function (vertices,a_normals,b_normals,a_a_projections,b_a_projections,a_b_projections,b_b_projections,a_projections,b_projections){
return (function (p__6996){var vec__6997 = p__6996;var projections1 = cljs.core.nth.call(null,vec__6997,(0),null);var projections2 = cljs.core.nth.call(null,vec__6997,(1),null);return clojird.core.projections_overlap_QMARK_.call(null,projections1,projections2);
});})(vertices,a_normals,b_normals,a_a_projections,b_a_projections,a_b_projections,b_b_projections,a_projections,b_projections))
,a_projections);var b_overlaps = cljs.core.map.call(null,((function (vertices,a_normals,b_normals,a_a_projections,b_a_projections,a_b_projections,b_b_projections,a_projections,b_projections,a_overlaps){
return (function (p__6998){var vec__6999 = p__6998;var projections1 = cljs.core.nth.call(null,vec__6999,(0),null);var projections2 = cljs.core.nth.call(null,vec__6999,(1),null);return clojird.core.projections_overlap_QMARK_.call(null,projections1,projections2);
});})(vertices,a_normals,b_normals,a_a_projections,b_a_projections,a_b_projections,b_b_projections,a_projections,b_projections,a_overlaps))
,b_projections);return (cljs.core.not_any_QMARK_.call(null,((function (vertices,a_normals,b_normals,a_a_projections,b_a_projections,a_b_projections,b_b_projections,a_projections,b_projections,a_overlaps,b_overlaps){
return (function (p1__6990_SHARP_){return cljs.core.not.call(null,p1__6990_SHARP_);
});})(vertices,a_normals,b_normals,a_a_projections,b_a_projections,a_b_projections,b_b_projections,a_projections,b_projections,a_overlaps,b_overlaps))
,a_overlaps)) && (cljs.core.not_any_QMARK_.call(null,((function (vertices,a_normals,b_normals,a_a_projections,b_a_projections,a_b_projections,b_b_projections,a_projections,b_projections,a_overlaps,b_overlaps){
return (function (p1__6991_SHARP_){return cljs.core.not.call(null,p1__6991_SHARP_);
});})(vertices,a_normals,b_normals,a_a_projections,b_a_projections,a_b_projections,b_b_projections,a_projections,b_projections,a_overlaps,b_overlaps))
,b_overlaps));
});
clojird.core.calculate_normal = (function calculate_normal(p__7000,p__7001){var vec__7004 = p__7000;var a_x = cljs.core.nth.call(null,vec__7004,(0),null);var a_y = cljs.core.nth.call(null,vec__7004,(1),null);var vec__7005 = p__7001;var b_x = cljs.core.nth.call(null,vec__7005,(0),null);var b_y = cljs.core.nth.call(null,vec__7005,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(b_y - a_y),(a_x - b_x)], null);
});
clojird.core.calculate_polygon_normals = (function calculate_polygon_normals(vertices){return cljs.core.map_indexed.call(null,(function (index,vertex){return clojird.core.calculate_normal.call(null,vertex,cljs.core.nth.call(null,vertices,cljs.core.mod.call(null,(index + (1)),cljs.core.count.call(null,vertices))));
}),vertices);
});
clojird.core.polygon_projection_on_normal = (function polygon_projection_on_normal(vertices,normal){return cljs.core.map.call(null,(function (p1__7006_SHARP_){return clojird.core.point_projection_on_normal.call(null,p1__7006_SHARP_,normal);
}),vertices);
});
clojird.core.point_projection_on_normal = (function point_projection_on_normal(p__7007,p__7008){var vec__7011 = p__7007;var x = cljs.core.nth.call(null,vec__7011,(0),null);var y = cljs.core.nth.call(null,vec__7011,(1),null);var vec__7012 = p__7008;var normal_x = cljs.core.nth.call(null,vec__7012,(0),null);var normal_y = cljs.core.nth.call(null,vec__7012,(1),null);return ((x * normal_x) + (y * normal_y));
});
clojird.core.projections_overlap_QMARK_ = (function projections_overlap_QMARK_(a_projections,b_projections){var min_a = cljs.core.apply.call(null,cljs.core.min,a_projections);var min_b = cljs.core.apply.call(null,cljs.core.min,b_projections);var max_a = cljs.core.apply.call(null,cljs.core.max,a_projections);var max_b = cljs.core.apply.call(null,cljs.core.max,b_projections);if(((max_a < min_b)) || ((max_b < min_a)))
{return false;
} else
{return true;
}
});
clojird.core.update_state = (function update_state(state,settings,dt){cljs.core.swap_BANG_.call(null,state,clojird.core.update_parallax,settings,new cljs.core.Keyword(null,"land","land",-1402569867));
cljs.core.swap_BANG_.call(null,state,clojird.core.update_parallax,settings,new cljs.core.Keyword(null,"sky","sky",1271496862));
cljs.core.swap_BANG_.call(null,state,clojird.core.update_pipes,settings);
cljs.core.swap_BANG_.call(null,state,clojird.core.update_bird_flipping,settings,dt);
cljs.core.swap_BANG_.call(null,state,clojird.core.update_bird_gravity,settings,dt);
return cljs.core.swap_BANG_.call(null,state,clojird.core.bird_pass_pipe,settings,dt);
});
clojird.core.random_pipe_up_y = (function random_pipe_up_y(){return (cljs.core.rand_int.call(null,(131)) + (100));
});
clojird.core.generate_pipe = (function generate_pipe(settings,direction,x,y){return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"sprite","sprite",172516848),((cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"pipe-up","pipe-up",-429194408)))?new cljs.core.Keyword(null,"pipe-up-sprite","pipe-up-sprite",1435174784):new cljs.core.Keyword(null,"pipe-down-sprite","pipe-down-sprite",-1841379380)).call(null,new cljs.core.Keyword(null,"assets","assets",210278279).cljs$core$IFn$_invoke$arity$1(settings)),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"forward","forward",-557345303)], null);
});
clojird.core.generate_pipe_pair = (function generate_pipe_pair(state,settings,no){var map__7015 = settings;var map__7015__$1 = ((cljs.core.seq_QMARK_.call(null,map__7015))?cljs.core.apply.call(null,cljs.core.hash_map,map__7015):map__7015);var map__7016 = cljs.core.get.call(null,map__7015__$1,new cljs.core.Keyword(null,"resolution","resolution",-756075601));var map__7016__$1 = ((cljs.core.seq_QMARK_.call(null,map__7016))?cljs.core.apply.call(null,cljs.core.hash_map,map__7016):map__7016);var width = cljs.core.get.call(null,map__7016__$1,new cljs.core.Keyword(null,"width","width",-384071477));var margin_x = cljs.core.get.call(null,map__7015__$1,new cljs.core.Keyword(null,"pipe-margin-x","pipe-margin-x",-251539784));var margin_y = cljs.core.get.call(null,map__7015__$1,new cljs.core.Keyword(null,"pipe-margin-y","pipe-margin-y",-845973504));var x = (width + (margin_x * no));var up_y = clojird.core.random_pipe_up_y.call(null);var down_y = (up_y - margin_y);return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pipes","pipes",-2098535323)], null),cljs.core.conj,clojird.core.generate_pipe.call(null,settings,new cljs.core.Keyword(null,"pipe-up","pipe-up",-429194408),x,up_y),clojird.core.generate_pipe.call(null,settings,new cljs.core.Keyword(null,"pipe-down","pipe-down",-66075319),x,down_y));
});
clojird.core.generate_pipes_pairs = (function generate_pipes_pairs(state,settings){var map__7020 = settings;var map__7020__$1 = ((cljs.core.seq_QMARK_.call(null,map__7020))?cljs.core.apply.call(null,cljs.core.hash_map,map__7020):map__7020);var map__7021 = cljs.core.get.call(null,map__7020__$1,new cljs.core.Keyword(null,"resolution","resolution",-756075601));var map__7021__$1 = ((cljs.core.seq_QMARK_.call(null,map__7021))?cljs.core.apply.call(null,cljs.core.hash_map,map__7021):map__7021);var canvas_width = cljs.core.get.call(null,map__7021__$1,new cljs.core.Keyword(null,"width","width",-384071477));var margin_x = cljs.core.get.call(null,map__7020__$1,new cljs.core.Keyword(null,"pipe-margin-x","pipe-margin-x",-251539784));var pairs_count = Math.ceil((canvas_width / margin_x));cljs.core.swap_BANG_.call(null,state,((function (map__7020,map__7020__$1,map__7021,map__7021__$1,canvas_width,margin_x,pairs_count){
return (function (p1__7017_SHARP_){return cljs.core.assoc.call(null,p1__7017_SHARP_,new cljs.core.Keyword(null,"pipes","pipes",-2098535323),cljs.core.PersistentVector.EMPTY);
});})(map__7020,map__7020__$1,map__7021,map__7021__$1,canvas_width,margin_x,pairs_count))
);
var n__4417__auto__ = pairs_count;var no = (0);while(true){
if((no < n__4417__auto__))
{cljs.core.swap_BANG_.call(null,state,clojird.core.generate_pipe_pair,settings,no);
{
var G__7022 = (no + (1));
no = G__7022;
continue;
}
} else
{return null;
}
break;
}
});
clojird.core.touch = (function touch(e,state,settings){if(cljs.core.not.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,settings))))
{return cljs.core.swap_BANG_.call(null,state,clojird.core.update_bird_jump,settings,new cljs.core.Keyword(null,"dt","dt",-368444759).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,settings)));
} else
{return null;
}
});
clojird.core.save_timestamp = (function save_timestamp(settings,timestamp,dt){return cljs.core.assoc.call(null,settings,new cljs.core.Keyword(null,"last-timestamp","last-timestamp",-2019388584),timestamp,new cljs.core.Keyword(null,"dt","dt",-368444759),dt);
});
clojird.core.update = (function update(timestamp,context,state,settings){var map__7026 = cljs.core.deref.call(null,settings);var map__7026__$1 = ((cljs.core.seq_QMARK_.call(null,map__7026))?cljs.core.apply.call(null,cljs.core.hash_map,map__7026):map__7026);var map__7027 = cljs.core.get.call(null,map__7026__$1,new cljs.core.Keyword(null,"resolution","resolution",-756075601));var map__7027__$1 = ((cljs.core.seq_QMARK_.call(null,map__7027))?cljs.core.apply.call(null,cljs.core.hash_map,map__7027):map__7027);var canvas_width = cljs.core.get.call(null,map__7027__$1,new cljs.core.Keyword(null,"width","width",-384071477));var canvas_height = cljs.core.get.call(null,map__7027__$1,new cljs.core.Keyword(null,"height","height",1025178622));var pause = cljs.core.get.call(null,map__7026__$1,new cljs.core.Keyword(null,"pause","pause",-2095325672));var last_timestamp = cljs.core.get.call(null,map__7026__$1,new cljs.core.Keyword(null,"last-timestamp","last-timestamp",-2019388584));var dt = (timestamp - last_timestamp);if(cljs.core.not.call(null,pause))
{var old_state_value_7028 = cljs.core.deref.call(null,state);clojird.core.update_state.call(null,state,cljs.core.deref.call(null,settings),dt);
clojird.core.save_history.call(null,state,old_state_value_7028);
} else
{}
cljs.core.swap_BANG_.call(null,settings,clojird.core.bird_collisions,cljs.core.deref.call(null,state),dt);
clojird.core.draw_game.call(null,dt,context,cljs.core.deref.call(null,state),cljs.core.deref.call(null,settings));
cljs.core.swap_BANG_.call(null,settings,clojird.core.save_timestamp,timestamp,dt);
return window.requestAnimationFrame(((function (map__7026,map__7026__$1,map__7027,map__7027__$1,canvas_width,canvas_height,pause,last_timestamp,dt){
return (function (p1__7023_SHARP_){return update.call(null,p1__7023_SHARP_,context,state,settings);
});})(map__7026,map__7026__$1,map__7027,map__7027__$1,canvas_width,canvas_height,pause,last_timestamp,dt))
);
});
clojird.core.assets_loading = (function assets_loading(timestamp,context,state,settings){if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,clojird.core.assets_loaded_count),cljs.core.deref.call(null,clojird.core.assets_count)))
{return clojird.core.update.call(null,timestamp,context,state,settings);
} else
{return window.requestAnimationFrame((function (p1__7029_SHARP_){return assets_loading.call(null,p1__7029_SHARP_,context,state,settings);
}));
}
});
clojird.core.create_canvas = (function create_canvas(width,height){var canvas = document.createElement("canvas");canvas.width = width;
canvas.height = height;
return canvas;
});
clojird.core.main = (function main(state,settings){var map__7034 = cljs.core.deref.call(null,settings);var map__7034__$1 = ((cljs.core.seq_QMARK_.call(null,map__7034))?cljs.core.apply.call(null,cljs.core.hash_map,map__7034):map__7034);var map__7035 = cljs.core.get.call(null,map__7034__$1,new cljs.core.Keyword(null,"resolution","resolution",-756075601));var map__7035__$1 = ((cljs.core.seq_QMARK_.call(null,map__7035))?cljs.core.apply.call(null,cljs.core.hash_map,map__7035):map__7035);var canvas_width = cljs.core.get.call(null,map__7035__$1,new cljs.core.Keyword(null,"width","width",-384071477));var canvas_height = cljs.core.get.call(null,map__7035__$1,new cljs.core.Keyword(null,"height","height",1025178622));var last_timestamp = cljs.core.get.call(null,map__7034__$1,new cljs.core.Keyword(null,"last-timestamp","last-timestamp",-2019388584));var canvas = clojird.core.create_canvas.call(null,canvas_width,canvas_height);var context = canvas.getContext("2d");document.body.appendChild(canvas);
window.onkeypress = ((function (map__7034,map__7034__$1,map__7035,map__7035__$1,canvas_width,canvas_height,last_timestamp,canvas,context){
return (function (p1__7030_SHARP_){return clojird.core.key_press.call(null,p1__7030_SHARP_,state,settings);
});})(map__7034,map__7034__$1,map__7035,map__7035__$1,canvas_width,canvas_height,last_timestamp,canvas,context))
;
window.onclick = ((function (map__7034,map__7034__$1,map__7035,map__7035__$1,canvas_width,canvas_height,last_timestamp,canvas,context){
return (function (p1__7031_SHARP_){return clojird.core.touch.call(null,p1__7031_SHARP_,state,settings);
});})(map__7034,map__7034__$1,map__7035,map__7035__$1,canvas_width,canvas_height,last_timestamp,canvas,context))
;
clojird.core.generate_pipes_pairs.call(null,state,cljs.core.deref.call(null,settings));
return clojird.core.assets_loading.call(null,last_timestamp,context,state,settings);
});
clojird.core.main.call(null,clojird.core.game_state,clojird.core.game_settings);

//# sourceMappingURL=core.js.map