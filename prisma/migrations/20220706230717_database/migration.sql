BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[users] (
    [id] INT NOT NULL IDENTITY(1,1),
    [okulNo] INT NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [sifre] NVARCHAR(1000) NOT NULL,
    [role] NVARCHAR(1000) NOT NULL CONSTRAINT [users_role_df] DEFAULT 'student',
    CONSTRAINT [users_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [users_okulNo_key] UNIQUE NONCLUSTERED ([okulNo]),
    CONSTRAINT [users_email_key] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[kiralananlar] (
    [id] INT NOT NULL IDENTITY(1,1),
    [userId] INT NOT NULL,
    [kitapId] INT NOT NULL,
    [teslimTarih] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [kiralananlar_pkey] PRIMARY KEY CLUSTERED ([id])
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
    CONSTRAINT [kitaplar_pkey] PRIMARY KEY CLUSTERED ([id])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
