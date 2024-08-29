-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "tittle" TEXT NOT NULL,
    "description" TEXT,
    "crateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
