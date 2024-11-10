self.onmessage = function(e) {
    if (e.data.type === 'calculateAverage') {
        const { points, partNames } = e.data;
        const averages = {};
        const extremePoints = {};

        // Get points for upper arm front and back
        const upperArmFrontPoints = points.leftUpperArmFront || [];
        const upperArmBackPoints = points.leftUpperArmBack || [];
        const rightUpperArmFrontPoints = points.rightUpperArmFront || [];
        const rightUpperArmBackPoints = points.rightUpperArmBack || [];

        // Get points for lower arm front and back
        const lowerArmFrontPoints = points.leftLowerArmFront || [];
        const lowerArmBackPoints = points.leftLowerArmBack || [];
        const rightLowerArmFrontPoints = points.rightLowerArmFront || [];
        const rightLowerArmBackPoints = points.rightLowerArmBack || [];

        // Get points for hands
        const leftHandPoints = points.leftHand || [];
        const rightHandPoints = points.rightHand || [];

        // Get points for feet
        const leftUpperFootPoints = points.leftUpperFoot || [];
        const leftLowerFootPoints = points.leftLowerFoot || [];
        const rightUpperFootPoints = points.rightUpperFoot || [];
        const rightLowerFootPoints = points.rightLowerFoot || [];

        // Separate top and bottom points for upper arm
        const upperFrontTop = upperArmFrontPoints.length > 0 ? upperArmFrontPoints[0] : null;
        const upperFrontBottom = upperArmFrontPoints.length > 0 ? upperArmFrontPoints[upperArmFrontPoints.length - 1] : null;
        const upperBackTop = upperArmBackPoints.length > 0 ? upperArmBackPoints[0] : null;
        const upperBackBottom = upperArmBackPoints.length > 0 ? upperArmBackPoints[upperArmBackPoints.length - 1] : null;
        const rightUpperFrontTop = rightUpperArmFrontPoints.length > 0 ? rightUpperArmFrontPoints[0] : null;
        const rightUpperFrontBottom = rightUpperArmFrontPoints.length > 0 ? rightUpperArmFrontPoints[rightUpperArmFrontPoints.length - 1] : null;
        const rightUpperBackTop = rightUpperArmBackPoints.length > 0 ? rightUpperArmBackPoints[0] : null;
        const rightUpperBackBottom = rightUpperArmBackPoints.length > 0 ? rightUpperArmBackPoints[rightUpperArmBackPoints.length - 1] : null;

        // Separate top and bottom points for lower arm
        const lowerFrontTop = lowerArmFrontPoints.length > 0 ? lowerArmFrontPoints[0] : null;
        const lowerFrontBottom = lowerArmFrontPoints.length > 0 ? lowerArmFrontPoints[lowerArmFrontPoints.length - 1] : null;
        const lowerBackTop = lowerArmBackPoints.length > 0 ? lowerArmBackPoints[0] : null;
        const lowerBackBottom = lowerArmBackPoints.length > 0 ? lowerArmBackPoints[lowerArmBackPoints.length - 1] : null;
        const rightLowerFrontTop = rightLowerArmFrontPoints.length > 0 ? rightLowerArmFrontPoints[0] : null;
        const rightLowerFrontBottom = rightLowerArmFrontPoints.length > 0 ? rightLowerArmFrontPoints[rightLowerArmFrontPoints.length - 1] : null;
        const rightLowerBackTop = rightLowerArmBackPoints.length > 0 ? rightLowerArmBackPoints[0] : null;
        const rightLowerBackBottom = rightLowerArmBackPoints.length > 0 ? rightLowerArmBackPoints[rightLowerArmBackPoints.length - 1] : null;

        // Separate top and bottom points for hands
        const leftHandTop = leftHandPoints.length > 0 ? leftHandPoints[0] : null;
        const leftHandBottom = leftHandPoints.length > 0 ? leftHandPoints[leftHandPoints.length - 1] : null;
        const rightHandTop = rightHandPoints.length > 0 ? rightHandPoints[0] : null;
        const rightHandBottom = rightHandPoints.length > 0 ? rightHandPoints[rightHandPoints.length - 1] : null;

        // Separate top and bottom points for feet
        const leftUpperFootTop = leftUpperFootPoints.length > 0 ? leftUpperFootPoints[0] : null;
        const leftUpperFootBottom = leftUpperFootPoints.length > 0 ? leftUpperFootPoints[leftUpperFootPoints.length - 1] : null;
        const leftLowerFootTop = leftLowerFootPoints.length > 0 ? leftLowerFootPoints[0] : null;
        const leftLowerFootBottom = leftLowerFootPoints.length > 0 ? leftLowerFootPoints[leftLowerFootPoints.length - 1] : null;
        const rightUpperFootTop = rightUpperFootPoints.length > 0 ? rightUpperFootPoints[0] : null;
        const rightUpperFootBottom = rightUpperFootPoints.length > 0 ? rightUpperFootPoints[rightUpperFootPoints.length - 1] : null;
        const rightLowerFootTop = rightLowerFootPoints.length > 0 ? rightLowerFootPoints[0] : null;
        const rightLowerFootBottom = rightLowerFootPoints.length > 0 ? rightLowerFootPoints[rightLowerFootPoints.length - 1] : null;

        // Calculate combined averages for upper arm points
        const upperTopAverage = calculateAverageOfPoints([upperFrontTop, upperBackTop]);
        const upperBottomAverage = calculateAverageOfPoints([upperFrontBottom, upperBackBottom]);
        const rightUpperTopAverage = calculateAverageOfPoints([rightUpperFrontTop, rightUpperBackTop]);
        const rightUpperBottomAverage = calculateAverageOfPoints([rightUpperFrontBottom, rightUpperBackBottom]);

        // Calculate combined averages for lower arm points
        const lowerTopAverage = calculateAverageOfPoints([lowerFrontTop, lowerBackTop]);
        const lowerBottomAverage = calculateAverageOfPoints([lowerFrontBottom, lowerBackBottom]);
        const rightLowerTopAverage = calculateAverageOfPoints([rightLowerFrontTop, rightLowerBackTop]);
        const rightLowerBottomAverage = calculateAverageOfPoints([rightLowerFrontBottom, rightLowerBackBottom]);

        // Calculate combined averages for foot points
        const leftUpperFootTopAverage = calculateAverageOfPoints([leftUpperFootTop]);
        const leftUpperFootBottomAverage = calculateAverageOfPoints([leftUpperFootBottom]);
        const leftLowerFootTopAverage = calculateAverageOfPoints([leftLowerFootTop]);
        const leftLowerFootBottomAverage = calculateAverageOfPoints([leftLowerFootBottom]);
        const rightUpperFootTopAverage = calculateAverageOfPoints([rightUpperFootTop]);
        const rightUpperFootBottomAverage = calculateAverageOfPoints([rightUpperFootBottom]);
        const rightLowerFootTopAverage = calculateAverageOfPoints([rightLowerFootTop]);
        const rightLowerFootBottomAverage = calculateAverageOfPoints([rightLowerFootBottom]);

        // Store the average points
        averages['combined_upper_arm'] = {
            top: upperTopAverage,
            bottom: upperBottomAverage
        };

        averages['combined_right_upper_arm'] = {
            top: rightUpperTopAverage,
            bottom: rightUpperBottomAverage
        };

        averages['combined_lower_arm'] = {
            top: lowerTopAverage,
            bottom: lowerBottomAverage
        };

        averages['combined_right_lower_arm'] = {
            top: rightLowerTopAverage,
            bottom: rightLowerBottomAverage
        };

        averages['combined_left_upper_foot'] = {
            top: leftUpperFootTopAverage,
            bottom: leftUpperFootBottomAverage
        };

        averages['combined_left_lower_foot'] = {
            top: leftLowerFootTopAverage,
            bottom: leftLowerFootBottomAverage
        };

        averages['combined_right_upper_foot'] = {
            top: rightUpperFootTopAverage,
            bottom: rightUpperFootBottomAverage
        };

        averages['combined_right_lower_foot'] = {
            top: rightLowerFootTopAverage,
            bottom: rightLowerFootBottomAverage
        };

        // Store the hand points
        averages['left_hand'] = {
            top: leftHandTop,
            bottom: leftHandBottom
        };

        averages['right_hand'] = {
            top: rightHandTop,
            bottom: rightHandBottom
        };

        // Store individual extreme points for reference
        extremePoints[partNames.leftUpperArmFront] = {
            top: upperFrontTop,
            bottom: upperFrontBottom
        };
        extremePoints[partNames.leftUpperArmBack] = {
            top: upperBackTop,
            bottom: upperBackBottom
        };
        extremePoints[partNames.leftLowerArmFront] = {
            top: lowerFrontTop,
            bottom: lowerFrontBottom
        };
        extremePoints[partNames.leftLowerArmBack] = {
            top: lowerBackTop,
            bottom: lowerBackBottom
        };
        extremePoints[partNames.leftHand] = {
            top: leftHandTop,
            bottom: leftHandBottom
        };
        extremePoints[partNames.rightUpperArmFront] = {
            top: rightUpperFrontTop,
            bottom: rightUpperFrontBottom
        };
        extremePoints[partNames.rightUpperArmBack] = {
            top: rightUpperBackTop,
            bottom: rightUpperBackBottom
        };
        extremePoints[partNames.rightLowerArmFront] = {
            top: rightLowerFrontTop,
            bottom: rightLowerFrontBottom
        };
        extremePoints[partNames.rightLowerArmBack] = {
            top: rightLowerBackTop,
            bottom: rightLowerBackBottom
        };
        extremePoints[partNames.rightHand] = {
            top: rightHandTop,
            bottom: rightHandBottom
        };
        extremePoints[partNames.leftUpperFoot] = {
            top: leftUpperFootTop,
            bottom: leftUpperFootBottom
        };
        extremePoints[partNames.leftLowerFoot] = {
            top: leftLowerFootTop,
            bottom: leftLowerFootBottom
        };
        extremePoints[partNames.rightUpperFoot] = {
            top: rightUpperFootTop,
            bottom: rightUpperFootBottom
        };
        extremePoints[partNames.rightLowerFoot] = {
            top: rightLowerFootTop,
            bottom: rightLowerFootBottom
        };

        console.log('Sending combined results:', {
            averages,
            extremePoints,
            allExtremePoints: true
        });

        self.postMessage({
            type: 'combinedResults',
            averages: averages,
            extremePoints: extremePoints,
            allExtremePoints: true
        });
    } else {
        // Regular point calculation case
        const { imageData, partName, width, height } = e.data;
        const extremePoints = findImageExtremePoints(imageData, width, height);

        self.postMessage({
            type: 'combinedResults',
            partName: partName,
            extremePoints: extremePoints
        });
    }
};

function findImageExtremePoints(imageData, width, height) {
    let topMost = { x: -1, y: height };
    let bottomMost = { x: -1, y: -1 };

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const index = (y * width + x) * 4;
            if (imageData[index + 3] > 0) {
                if (y < topMost.y) {
                    topMost = { x, y };
                }
                if (y > bottomMost.y) {
                    bottomMost = { x, y };
                }
            }
        }
    }

    return {
        top: topMost.x !== -1 ? topMost : null,
        bottom: bottomMost.x !== -1 ? bottomMost : null
    };
}

function calculateAverageOfPoints(points) {
    // Filter out null or undefined points
    const validPoints = points.filter(point => point && typeof point.x === 'number' && typeof point.y === 'number');

    if (validPoints.length === 0) {
        return null;
    }

    const sumX = validPoints.reduce((sum, point) => sum + point.x, 0);
    const sumY = validPoints.reduce((sum, point) => sum + point.y, 0);

    return {
        x: sumX / validPoints.length,
        y: sumY / validPoints.length
    };
}
function findImageExtremePoints(imageData, width, height) {
    let topMost = { x: -1, y: height };
    let bottomMost = { x: -1, y: -1 };

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const index = (y * width + x) * 4;
            if (imageData[index + 3] > 0) {
                if (y < topMost.y) {
                    topMost = { x, y };
                }
                if (y > bottomMost.y) {
                    bottomMost = { x, y };
                }
            }
        }
    }

    return {
        top: topMost.x !== -1 ? topMost : null,
        bottom: bottomMost.x !== -1 ? bottomMost : null
    };
}

function calculateAverageOfPoints(points) {
    // Filter out null or undefined points
    const validPoints = points.filter(point => point && typeof point.x === 'number' && typeof point.y === 'number');

    if (validPoints.length === 0) {
        return null;
    }

    const sumX = validPoints.reduce((sum, point) => sum + point.x, 0);
    const sumY = validPoints.reduce((sum, point) => sum + point.y, 0);

    return {
        x: sumX / validPoints.length,
        y: sumY / validPoints.length
    };
}
