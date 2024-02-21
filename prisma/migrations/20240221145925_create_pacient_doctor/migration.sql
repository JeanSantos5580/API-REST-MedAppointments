-- CreateTable
CREATE TABLE `PatientDoctor` (
    `id` VARCHAR(191) NOT NULL,
    `patient_id` VARCHAR(191) NOT NULL,
    `doctor_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `PatientDoctor_patient_id_doctor_id_key`(`patient_id`, `doctor_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PatientDoctor` ADD CONSTRAINT `PatientDoctor_patient_id_fkey` FOREIGN KEY (`patient_id`) REFERENCES `patient`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PatientDoctor` ADD CONSTRAINT `PatientDoctor_doctor_id_fkey` FOREIGN KEY (`doctor_id`) REFERENCES `doctor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
