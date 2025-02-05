import MLKitObjectDetectionCommon
import RNMLKitCore
import ExpoModulesCore
public protocol RNMLKitObjectDetectorCommon {
    var name: String {get set}

    func detectObjects(image: SharedRef<UIImage>) async throws -> [RNMLKitObjectDetectionObjectRecord]
}
