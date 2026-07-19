import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout



IMG_SIZE = 150
BATCH_SIZE = 32


train_path = "dataset/chest_xray/train"
test_path = "dataset/chest_xray/test"



train_datagen = ImageDataGenerator(
    rescale=1./255,
    rotation_range=20,
    zoom_range=0.2,
    horizontal_flip=True
)


test_datagen = ImageDataGenerator(
    rescale=1./255
)



train_data = train_datagen.flow_from_directory(
    train_path,
    target_size=(IMG_SIZE,IMG_SIZE),
    batch_size=BATCH_SIZE,
    class_mode="binary"
)


test_data = test_datagen.flow_from_directory(
    test_path,
    target_size=(IMG_SIZE,IMG_SIZE),
    batch_size=BATCH_SIZE,
    class_mode="binary"
)



model = Sequential()



model.add(
    Conv2D(
        32,
        (3,3),
        activation="relu",
        input_shape=(IMG_SIZE,IMG_SIZE,3)
    )
)

model.add(MaxPooling2D())


model.add(
    Conv2D(
        64,
        (3,3),
        activation="relu"
    )
)

model.add(MaxPooling2D())


model.add(Flatten())


model.add(Dense(128,activation="relu"))

model.add(Dropout(0.5))


model.add(
    Dense(
        1,
        activation="sigmoid"
    )
)



model.compile(
    optimizer="adam",
    loss="binary_crossentropy",
    metrics=["accuracy"]
)



model.summary()



history = model.fit(
    train_data,
    epochs=10,
    validation_data=test_data
)



model.save("medvision_model.h5")


print("Model Saved Successfully")