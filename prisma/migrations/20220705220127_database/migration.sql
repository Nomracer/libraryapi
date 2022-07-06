BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[users] (
    [id] INT NOT NULL IDENTITY(1,1),
    [okulNo] INT NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [sifre] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [users_pkey] PRIMARY KEY ([id]),
    CONSTRAINT [users_okulNo_key] UNIQUE ([okulNo]),
    CONSTRAINT [users_email_key] UNIQUE ([email])
);

-- CreateTable
CREATE TABLE [dbo].[kirakitap] (
    [id] INT NOT NULL IDENTITY(1,1),
    [userId] INT NOT NULL,
    [kitapId] INT NOT NULL,
    [time] INT NOT NULL CONSTRAINT [kirakitap_time_df] DEFAULT 0,
    CONSTRAINT [kirakitap_pkey] PRIMARY KEY ([id]),
    CONSTRAINT [kirakitap_userId_key] UNIQUE ([userId]),
    CONSTRAINT [kirakitap_kitapId_key] UNIQUE ([kitapId])
);

-- CreateTable
CREATE TABLE [dbo].[kitaplar] (
    [id] INT NOT NULL IDENTITY(1,1),
    [adi] NVARCHAR(1000) NOT NULL,
    [basimYili] NVARCHAR(1000) NOT NULL,
    [adet] INT NOT NULL,
    [kalanKitap] INT NOT NULL,
    [yazar] NVARCHAR(1000) NOT NULL,
    [sayfaSayisi] INT NOT NULL,
    [kategori] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [kitaplar_pkey] PRIMARY KEY ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Kategoriler] (
    [id] INT NOT NULL IDENTITY(1,1),
    [kategoriIsmi] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Kategoriler_pkey] PRIMARY KEY ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[kirakitap] ADD CONSTRAINT [kirakitap_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[users]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[kirakitap] ADD CONSTRAINT [kirakitap_kitapId_fkey] FOREIGN KEY ([kitapId]) REFERENCES [dbo].[kitaplar]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
