-- CreateTable
CREATE TABLE "Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tittle" TEXT NOT NULL,
    "description" TEXT,
    "crateAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
