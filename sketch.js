let capture;
let posenet;
let noseX, noseY;
let reyeX, reyeY;
let leyeX, leyeY;
let singlePose,skeleton;
let actor_img,specs;


function setup(){
    createCanvas(800, 500);
    videocapture = createCapture(VIDEO)
    videocapture.hide();

    posenet = ml5.poseNet(videocapture, modelLoaded);
    posenet.on('pose', receivedPoses)

    actor_img = loadImage('images/shahrukh.png') //image 
    specs = loadImage('images/specs.png')
}

function receivedPoses(poses){
    console.log(poses);

    if(poses.length > 0){
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;


        // noseX = singlePose.nose.x; //traversing the JSON structure
        // noseY = singlePose.nose.y;

        // reyeX = singlePose.rightEye.x; 
        // reyeY = singlePose.rightEye.y;

        // leyeX = singlePose.leftEye.x; 
        // leyeY = singlePose.leftEye.y;
    }

    console.log(noseX + " " + noseY)
}

function modelLoaded(){
    console.log('Model has loaded');
}


function draw(){

    //images and videos(webcam)
    image(videocapture, 0, 0)
    fill(255, 0, 0)

    if(singlePose){
        for(let i=0; i<singlePose.keypoints.length; i++){
        ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y, 20);
        }
        
        stroke(255, 0, 0) //for making the line in red colour
        strokeWeight(5);
        for(let j=0; j<skeleton.length; j++){
            line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y)
        }

        //image(actor_img, singlePose.nose.x-250,singlePose.nose.x-250, 500,500)
        image(specs, singlePose.rightEye.x-50,singlePose.rightEye.y-85, 200,200)
    }




    // ellipse(noseX, noseY, 20, 20)
    // ellipse(reyeX, reyeY, 20, 20)
    // ellipse(leyeX, leyeY, 20, 20)

    // r = getRandomArbitrary(0, 255);
    // g = getRandomArbitrary(0, 255)
    // b = getRandomArbitrary(0, 255)
    // fill(r, g, b);
    // ellipse(mouseX, mouseY, 60, 60)

    //background(200);
    
    //point(200,200)
    //line(200,200,400,400)
    //triangle(100,200,300,400,250,150);
    //rect(500,200,100,100);
    //ellipse(600,300,100,100)

    //stroke and colour
    // fill(132,100,134, 100)
    // stroke(255, 0, 0);
    // strokeWeight(3)
    
}