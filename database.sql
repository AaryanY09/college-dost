CREATE DATABASE college_dost;
USE college_dost;

-- =========================
-- 1. ADMIN TABLE
-- =========================
CREATE TABLE admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    password VARCHAR(255)
);

-- =========================
-- 2. STUDENT TABLE
-- =========================
CREATE TABLE student (
    prn BIGINT PRIMARY KEY,
    name VARCHAR(50),
    year INT,
    division VARCHAR(5),
    password VARCHAR(255)
);

-- =========================
-- 3. MENTOR TABLE
-- =========================
CREATE TABLE mentor (
    prn BIGINT PRIMARY KEY,
    password VARCHAR(255),
    name VARCHAR(100) NOT NULL,
    division VARCHAR(10) NOT NULL
);

-- =========================
-- 4. ALUMNI TABLE
-- =========================
CREATE TABLE alumni (
    prn BIGINT PRIMARY KEY,
    name VARCHAR(50),
    company VARCHAR(100),
    passout_year INT,
    password VARCHAR(255)
);

-- =========================
-- 5. CONTACT TABLE
-- =========================
CREATE TABLE contact (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100),
    message TEXT
);

-- =========================
-- 6. CHATS TABLE
-- =========================
CREATE TABLE chats (
    chat_id INT AUTO_INCREMENT PRIMARY KEY,
    student_prn BIGINT,
    mentor_prn BIGINT,
    is_anonymous TINYINT(1) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================
-- 7. MESSAGES TABLE
-- =========================
CREATE TABLE messages (
    message_id INT AUTO_INCREMENT PRIMARY KEY,
    chat_id INT,
    sender_prn BIGINT,
    message TEXT,
    file_url VARCHAR(255),
    is_seen TINYINT(1) DEFAULT 0,
    is_deleted TINYINT(1) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    message_type VARCHAR(20) DEFAULT 'text',
    file_name VARCHAR(255),
    deleted_for VARCHAR(20) DEFAULT 'none'
);

-- =========================
-- 8. NOTIFICATIONS TABLE
-- =========================
CREATE TABLE notifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_prn BIGINT,
    chat_id INT,
    is_read TINYINT(1) DEFAULT 0
);

-- =========================
-- 9. ACHATS TABLE
-- =========================
CREATE TABLE achats (
    achat_id INT AUTO_INCREMENT PRIMARY KEY,
    astudent_prn BIGINT,
    amentor_prn BIGINT,
    ais_anonymous TINYINT(1) DEFAULT 0,
    acreated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================
-- 10. AMESSAGES TABLE
-- =========================
CREATE TABLE amessages (
    amessage_id INT AUTO_INCREMENT PRIMARY KEY,
    achat_id INT,
    asender_prn BIGINT,
    amessage TEXT,
    afile_url VARCHAR(255),
    ais_seen TINYINT(1) DEFAULT 0,
    ais_deleted TINYINT(1) DEFAULT 0,
    acreated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    amessage_type VARCHAR(20) DEFAULT 'text',
    afile_name VARCHAR(255),
    adeleted_for VARCHAR(20) DEFAULT 'none'
);

-- =========================
-- 11. ANOTIFICATIONS TABLE
-- =========================
CREATE TABLE anotifications (
    aid INT AUTO_INCREMENT PRIMARY KEY,
    auser_prn BIGINT,
    achat_id INT,
    ais_read TINYINT(1) DEFAULT 0
);

-- =========================
-- 12. ANNOUNCEMENTS TABLE
-- =========================
CREATE TABLE announcements (
    announcement_id INT AUTO_INCREMENT PRIMARY KEY,
    mentor_prn BIGINT NOT NULL,
    mentor_name VARCHAR(100),
    title VARCHAR(255),
    message TEXT,
    file_name VARCHAR(255),
    file_type VARCHAR(100),
    file_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================
-- 13. ANNOUNCEMENT_DOWNLOADS TABLE
-- =========================
CREATE TABLE announcement_downloads (
    download_id INT AUTO_INCREMENT PRIMARY KEY,
    announcement_id INT,
    student_prn BIGINT,
    downloaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (announcement_id)
    REFERENCES announcements(announcement_id)
    ON DELETE CASCADE
);

-- =========================
-- 14. SHARECONMENTS TABLE
-- =========================
CREATE TABLE shareconments (
    shareConMent_id INT AUTO_INCREMENT PRIMARY KEY,
    mentor_prn BIGINT NOT NULL,
    mentor_name VARCHAR(100),
    title VARCHAR(255),
    message TEXT,
    file_name VARCHAR(255),
    file_type VARCHAR(100),
    file_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================
-- 15. SHARECONMENT_DOWNLOADS TABLE
-- =========================
CREATE TABLE shareconment_downloads (
    download_id INT AUTO_INCREMENT PRIMARY KEY,
    shareConMent_id INT,
    student_prn BIGINT,
    downloaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (shareConMent_id)
    REFERENCES shareconments(shareConMent_id)
    ON DELETE CASCADE
);

-- =========================
-- 16. SPOTLIGHTS TABLE
-- =========================
CREATE TABLE spotlights (
    spotlight_id INT AUTO_INCREMENT PRIMARY KEY,
    alumni_prn BIGINT NOT NULL,
    alumni_name VARCHAR(100),
    title VARCHAR(255),
    message TEXT,
    file_name VARCHAR(255),
    file_type VARCHAR(100),
    file_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================
-- 17. SPOTLIGHT_DOWNLOADS TABLE
-- =========================
CREATE TABLE spotlight_downloads (
    download_id INT AUTO_INCREMENT PRIMARY KEY,
    spotlight_id INT NOT NULL,
    user_prn BIGINT NOT NULL,
    user_role ENUM('STUDENT','MENTOR','ALUMNI') NOT NULL,
    downloaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (spotlight_id)
    REFERENCES spotlights(spotlight_id)
    ON DELETE CASCADE
);

-- =========================
-- 18. CULTURE TABLE
-- =========================
CREATE TABLE culture (
    culture_id INT AUTO_INCREMENT PRIMARY KEY,
    alumni_prn BIGINT NOT NULL,
    alumni_name VARCHAR(100),
    title VARCHAR(255),
    message TEXT,
    file_name VARCHAR(255),
    file_type VARCHAR(100),
    file_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================
-- 19. CULTURE_DOWNLOADS TABLE
-- =========================
CREATE TABLE culture_downloads (
    download_id INT AUTO_INCREMENT PRIMARY KEY,
    culture_id INT NOT NULL,
    user_prn BIGINT NOT NULL,
    user_role ENUM('STUDENT','MENTOR','ALUMNI') NOT NULL,
    downloaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (culture_id)
    REFERENCES culture(culture_id)
    ON DELETE CASCADE
);

-- =========================
-- 20. SHARECONALU TABLE
-- =========================
CREATE TABLE shareconalu (
    shareConAlu_id INT AUTO_INCREMENT PRIMARY KEY,
    alumni_prn BIGINT NOT NULL,
    alumni_name VARCHAR(100),
    title VARCHAR(255),
    message TEXT,
    file_name VARCHAR(255),
    file_type VARCHAR(100),
    file_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================
-- 21. SHARECONALU_DOWNLOADS TABLE
-- =========================
CREATE TABLE shareconalu_downloads (
    download_id INT AUTO_INCREMENT PRIMARY KEY,
    shareConAlu_id INT NOT NULL,
    user_prn BIGINT NOT NULL,
    user_role ENUM('STUDENT','MENTOR','ALUMNI') NOT NULL,
    downloaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (shareConAlu_id)
    REFERENCES shareconalu(shareConAlu_id)
    ON DELETE CASCADE
);