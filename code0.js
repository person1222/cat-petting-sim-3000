gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDCatObjects1= [];
gdjs.Untitled_32sceneCode.GDCatObjects2= [];
gdjs.Untitled_32sceneCode.GDCatObjects3= [];
gdjs.Untitled_32sceneCode.GDPurpleBackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDPurpleBackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDPurpleBackgroundObjects3= [];
gdjs.Untitled_32sceneCode.GDKittyKoinsObjects1= [];
gdjs.Untitled_32sceneCode.GDKittyKoinsObjects2= [];
gdjs.Untitled_32sceneCode.GDKittyKoinsObjects3= [];
gdjs.Untitled_32sceneCode.GDSilverCoinObjects1= [];
gdjs.Untitled_32sceneCode.GDSilverCoinObjects2= [];
gdjs.Untitled_32sceneCode.GDSilverCoinObjects3= [];
gdjs.Untitled_32sceneCode.GDButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDButtonObjects3= [];
gdjs.Untitled_32sceneCode.GDBlueButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDBlueButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDBlueButtonObjects3= [];
gdjs.Untitled_32sceneCode.GDUpgrade1Objects1= [];
gdjs.Untitled_32sceneCode.GDUpgrade1Objects2= [];
gdjs.Untitled_32sceneCode.GDUpgrade1Objects3= [];
gdjs.Untitled_32sceneCode.GDUpgrade2Objects1= [];
gdjs.Untitled_32sceneCode.GDUpgrade2Objects2= [];
gdjs.Untitled_32sceneCode.GDUpgrade2Objects3= [];
gdjs.Untitled_32sceneCode.GDUpgrade3Objects1= [];
gdjs.Untitled_32sceneCode.GDUpgrade3Objects2= [];
gdjs.Untitled_32sceneCode.GDUpgrade3Objects3= [];
gdjs.Untitled_32sceneCode.GDUpgrade4Objects1= [];
gdjs.Untitled_32sceneCode.GDUpgrade4Objects2= [];
gdjs.Untitled_32sceneCode.GDUpgrade4Objects3= [];
gdjs.Untitled_32sceneCode.GDShopBGObjects1= [];
gdjs.Untitled_32sceneCode.GDShopBGObjects2= [];
gdjs.Untitled_32sceneCode.GDShopBGObjects3= [];
gdjs.Untitled_32sceneCode.GDGreenBackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDGreenBackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDGreenBackgroundObjects3= [];
gdjs.Untitled_32sceneCode.GDU1NameObjects1= [];
gdjs.Untitled_32sceneCode.GDU1NameObjects2= [];
gdjs.Untitled_32sceneCode.GDU1NameObjects3= [];
gdjs.Untitled_32sceneCode.GDU2NameObjects1= [];
gdjs.Untitled_32sceneCode.GDU2NameObjects2= [];
gdjs.Untitled_32sceneCode.GDU2NameObjects3= [];
gdjs.Untitled_32sceneCode.GDU3NameObjects1= [];
gdjs.Untitled_32sceneCode.GDU3NameObjects2= [];
gdjs.Untitled_32sceneCode.GDU3NameObjects3= [];
gdjs.Untitled_32sceneCode.GDU4NameObjects1= [];
gdjs.Untitled_32sceneCode.GDU4NameObjects2= [];
gdjs.Untitled_32sceneCode.GDU4NameObjects3= [];
gdjs.Untitled_32sceneCode.GDU1StatsObjects1= [];
gdjs.Untitled_32sceneCode.GDU1StatsObjects2= [];
gdjs.Untitled_32sceneCode.GDU1StatsObjects3= [];
gdjs.Untitled_32sceneCode.GDU2StatsObjects1= [];
gdjs.Untitled_32sceneCode.GDU2StatsObjects2= [];
gdjs.Untitled_32sceneCode.GDU2StatsObjects3= [];
gdjs.Untitled_32sceneCode.GDU3StatsObjects1= [];
gdjs.Untitled_32sceneCode.GDU3StatsObjects2= [];
gdjs.Untitled_32sceneCode.GDU3StatsObjects3= [];
gdjs.Untitled_32sceneCode.GDU4StatsObjects1= [];
gdjs.Untitled_32sceneCode.GDU4StatsObjects2= [];
gdjs.Untitled_32sceneCode.GDU4StatsObjects3= [];
gdjs.Untitled_32sceneCode.GDwatermarkObjects1= [];
gdjs.Untitled_32sceneCode.GDwatermarkObjects2= [];
gdjs.Untitled_32sceneCode.GDwatermarkObjects3= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.conditionTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_1 = {val:false};


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{



}


};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Upgrade1"), gdjs.Untitled_32sceneCode.GDUpgrade1Objects2);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDUpgrade1Objects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDUpgrade1Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDUpgrade1Objects2[k] = gdjs.Untitled_32sceneCode.GDUpgrade1Objects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDUpgrade1Objects2.length = k;}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Cost"));
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("U1Stats"), gdjs.Untitled_32sceneCode.GDU1StatsObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Cost")));
}{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("NumberBought").add(1);
}{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Timer").setNumber(1 / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("NumberBought")));
}{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Cost").setNumber(Math.round(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Cost")) * 1.2));
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDU1StatsObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDU1StatsObjects2[i].setString("$" + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Cost")) + " / CPS: +0.1 / TCPS: " + gdjs.evtTools.common.toString(0.1 * (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("NumberBought")))));
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("NumberBought")) > 0;
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Untitled_32sceneCode.conditionTrue_1 = gdjs.Untitled_32sceneCode.condition1IsTrue_0;
gdjs.Untitled_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9446692);
}
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Upgrade1");
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Upgrade1") > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Timer"));
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(0.1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Upgrade1");
}}

}


};gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{



}


};gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Upgrade2"), gdjs.Untitled_32sceneCode.GDUpgrade2Objects2);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDUpgrade2Objects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDUpgrade2Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDUpgrade2Objects2[k] = gdjs.Untitled_32sceneCode.GDUpgrade2Objects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDUpgrade2Objects2.length = k;}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Cost"));
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("U2Stats"), gdjs.Untitled_32sceneCode.GDU2StatsObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Cost")));
}{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("NumberBought").add(1);
}{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Timer").setNumber(1 / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("NumberBought")));
}{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Cost").setNumber(Math.round(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Cost")) * 1.2));
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDU2StatsObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDU2StatsObjects2[i].setString("$" + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Cost")) + " / CPS: +1 / TCPS: " + gdjs.evtTools.common.toString(1 * (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("NumberBought")))));
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("NumberBought")) > 0;
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Untitled_32sceneCode.conditionTrue_1 = gdjs.Untitled_32sceneCode.condition1IsTrue_0;
gdjs.Untitled_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9453524);
}
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Upgrade2");
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Upgrade2") > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("Timer"));
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Upgrade2");
}}

}


};gdjs.Untitled_32sceneCode.eventsList4 = function(runtimeScene) {

{



}


};gdjs.Untitled_32sceneCode.eventsList5 = function(runtimeScene) {

{



}


};gdjs.Untitled_32sceneCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Upgrade4"), gdjs.Untitled_32sceneCode.GDUpgrade4Objects2);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDUpgrade4Objects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDUpgrade4Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDUpgrade4Objects2[k] = gdjs.Untitled_32sceneCode.GDUpgrade4Objects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDUpgrade4Objects2.length = k;}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Cost"));
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("U4Stats"), gdjs.Untitled_32sceneCode.GDU4StatsObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Cost")));
}{runtimeScene.getScene().getVariables().getFromIndex(4).getChild("NumberBought").add(1);
}{runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Timer").setNumber(1 / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getChild("NumberBought")));
}{runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Cost").setNumber(Math.round(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Cost")) * 1.2));
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDU4StatsObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDU4StatsObjects2[i].setString("$" + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4).getChild("Cost")) + " / CPS: +25 / TCPS: " + gdjs.evtTools.common.toString(25 * (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getChild("NumberBought")))));
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getChild("NumberBought")) > 0;
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Untitled_32sceneCode.conditionTrue_1 = gdjs.Untitled_32sceneCode.condition1IsTrue_0;
gdjs.Untitled_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9461668);
}
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Upgrade4");
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Upgrade4") > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("Timer"));
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(25);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Upgrade4");
}}

}


};gdjs.Untitled_32sceneCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Upgrade3"), gdjs.Untitled_32sceneCode.GDUpgrade3Objects2);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDUpgrade3Objects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDUpgrade3Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDUpgrade3Objects2[k] = gdjs.Untitled_32sceneCode.GDUpgrade3Objects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDUpgrade3Objects2.length = k;}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Cost"));
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("U3Stats"), gdjs.Untitled_32sceneCode.GDU3StatsObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Cost")));
}{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("NumberBought").add(1);
}{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Timer").setNumber(1 / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("NumberBought")));
}{runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Cost").setNumber(Math.round(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Cost")) * 1.2));
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDU3StatsObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDU3StatsObjects2[i].setString("$" + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Cost")) + " / CPS: +5 / TCPS: " + gdjs.evtTools.common.toString(5 * (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("NumberBought")))));
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("NumberBought")) > 0;
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Untitled_32sceneCode.conditionTrue_1 = gdjs.Untitled_32sceneCode.condition1IsTrue_0;
gdjs.Untitled_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9457580);
}
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Upgrade3");
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Upgrade3") > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getChild("Timer"));
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(5);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Upgrade3");
}}

}


{


gdjs.Untitled_32sceneCode.eventsList6(runtimeScene);
}


};gdjs.Untitled_32sceneCode.eventsList8 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.Untitled_32sceneCode.GDBlueButtonObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBlueButtonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBlueButtonObjects1[i].hide();
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "HoliznaCC0 - Level 2.mp3", true, 100, 1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("PurpleBackground"), gdjs.Untitled_32sceneCode.GDPurpleBackgroundObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPurpleBackgroundObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPurpleBackgroundObjects1[i].setXOffset(gdjs.Untitled_32sceneCode.GDPurpleBackgroundObjects1[i].getXOffset() + (0.5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButton"), gdjs.Untitled_32sceneCode.GDBlueButtonObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBlueButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBlueButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Untitled_32sceneCode.GDBlueButtonObjects1[k] = gdjs.Untitled_32sceneCode.GDBlueButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBlueButtonObjects1.length = k;}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Cat"), gdjs.Untitled_32sceneCode.GDCatObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCatObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCatObjects1[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.2, 0, 0, 0, 55, 0.1, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "159376__greenhourglass__boing1.wav", false, 20, 1.5);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("KittyKoins"), gdjs.Untitled_32sceneCode.GDKittyKoinsObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDKittyKoinsObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDKittyKoinsObjects1[i].setString(gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)))) + "KittyKoins");
}
}}

}


{


gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList7(runtimeScene);
}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDCatObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCatObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCatObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPurpleBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPurpleBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPurpleBackgroundObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDKittyKoinsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDKittyKoinsObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDKittyKoinsObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDSilverCoinObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSilverCoinObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSilverCoinObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDButtonObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBlueButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlueButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlueButtonObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDUpgrade1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDUpgrade1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDUpgrade1Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDUpgrade2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDUpgrade2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDUpgrade2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDUpgrade3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDUpgrade3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDUpgrade3Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDUpgrade4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDUpgrade4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDUpgrade4Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDShopBGObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDShopBGObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDShopBGObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDGreenBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGreenBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGreenBackgroundObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDU1NameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDU1NameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDU1NameObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDU2NameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDU2NameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDU2NameObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDU3NameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDU3NameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDU3NameObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDU4NameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDU4NameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDU4NameObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDU1StatsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDU1StatsObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDU1StatsObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDU2StatsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDU2StatsObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDU2StatsObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDU3StatsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDU3StatsObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDU3StatsObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDU4StatsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDU4StatsObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDU4StatsObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDwatermarkObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDwatermarkObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDwatermarkObjects3.length = 0;

gdjs.Untitled_32sceneCode.eventsList8(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
