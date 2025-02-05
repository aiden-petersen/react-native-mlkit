import Foundation
import MLKitVision
import ExpoModulesCore

public enum RNMLKitImageError:Error {
    case invalidImageURL(imagePath:String)
    case couldNotLoadImage(imagePath:String)
}


public class RNMLKitImage {
    public var uiImage: SharedRef<UIImage>
    public var visionImage: VisionImage
    
    public init(image:SharedRef<UIImage>) throws {
        self.uiImage = image;
        visionImage = VisionImage(image:image.ref)
        visionImage.orientation = image.ref.imageOrientation
    }
}
